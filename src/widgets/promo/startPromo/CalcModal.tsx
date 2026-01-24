import React from "react";
import compStyles from '@/widgets/promo/startPromo/startPromo.module.scss';

type CalcData = {
  eventType: string;
  players: string;
  name: string;
  phone: string;
};

type Props = {
  onClose: () => void;
  onSubmit?: (data: CalcData) => void;
};

export default function CalcModal({ onClose, onSubmit }: Props) {
  const eventOptions = [
    'День рождения',
    'Мероприятие для школьников',
    'Вечеринка',
    'Семейный отдых'
  ];

  const playersOptions = [
    'до 5 человек',
    '6-12 человек',
    '13-17 человек',
    'Более 18 человек',
    'Пока не знаю'
  ];

  const [step, setStep] = React.useState(1);
  // по умолчанию выбираем первый элемент в каждом списке
  const [eventType, setEventType] = React.useState<string>(eventOptions[0]);
  const [players, setPlayers] = React.useState<string>(playersOptions[0]);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  // ...added: validation error message...
  const [error, setError] = React.useState('');

  // helper: remove non-digits
  const digitsOnly = (s: string) => s.replace(/\D/g, '');

  // проверка на российский номер:
  // допустимы:
  //  - 11 цифр, начинающихся с 7 или 8 (например 89261234567 или 79261234567)
  //  - 10 цифр, начинающихся с 9 (например 9261234567) — будем считать российским
  const isValidRussianPhone = (s: string) => {
    const d = digitsOnly(s);
    if (d.length === 11 && (d.startsWith('7') || d.startsWith('8'))) return true;
    if (d.length === 10 && d.startsWith('9')) return true;
    return false;
  };

  // нормализуем к формату +7XXXXXXXXXX для отправки
  const normalizePhone = (s: string) => {
    const d = digitsOnly(s);
    if (d.length === 11 && d.startsWith('8')) return '+7' + d.slice(1);
    if (d.length === 11 && d.startsWith('7')) return '+' + d;
    if (d.length === 10) return '+7' + d;
    return s;
  };

  const handleNext = () => { if (step < 3) setStep(s => s + 1); };
  const handleBack = () => { if (step > 1) setStep(s => s - 1); };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // minimal validation: имя и телефон должны быть заполнены
    if (!name || !phone) {
      // если не заполнено, переводим пользователя на шаг с контактами и показываем сообщение
      setStep(3);
      setError('Заполните пожалуйста имя и телефон');
      return;
    }

    // согласие с политикой обязателен
    if (!consent) {
      setStep(3);
      setError('Необходимо согласиться с Политикой конфиденциальности');
      return;
    }

    // проверяем, что номер — российский
    if (!isValidRussianPhone(phone)) {
      setStep(3);
      setError('Введите корректный российский номер телефона, например +7 (912) 345-67-89 или 8 912 345 67 89');
      return;
    }

    const data: CalcData = { eventType, players, name, phone };

    // Подготовка тела сообщения (так же, как в PromoForm.sendMessage)
    const phoneForSend = normalizePhone(phone);
    const body = `Форма расчёта:\nТип мероприятия - ${eventType}\nКоличество участников - ${players}\nФИО - ${name}\nТел - ${phoneForSend}`;

    // ym (метрика), Telegram и внутренний /api/sendForm
    try {
      setSubmitting(true);
      if (typeof window !== "undefined" && typeof (window as any).ym === "function") {
        (window as any).ym(104030838, "reachGoal", "button_click");
      }

      await fetch(`https://api.telegram.org/bot8341433626:AAFLFWm2ExJH3RuHfgVQ3QbPTCye9RSo-xU/sendMessage`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          chat_id: '-1003055161566',
          text: body,
          parse_mode: "Markdown"
        })
      });

      await fetch('/api/sendForm', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name,
          phone: phoneForSend,
          comment: `Запрос расчёта: ${eventType}; players: ${players}`
        })
      });
    } catch (err) {
      // логируем ошибку в консоль — не прерываем UX
      // eslint-disable-next-line no-console
      console.error('Ошибка отправки формы расчёта', err);
    }

    // показать сообщение благодарности сразу
    setSubmitted(true);
    setSubmitting(false);
    setError(''); // очистить ошибку при успешной отправке

    // опционально: сообщаем родителю через небольшой интервал, чтобы сообщение успело отобразиться
    if (onSubmit) {
      setTimeout(() => onSubmit(data), 3000);
    }
  };

  // progress circle calculation
  const totalSteps = 3;
  const percent = Math.round((step / totalSteps) * 100); // 1->33, 2->66, 3->100
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - percent / 100);

  return (
    <div className={compStyles.calcOverlay} onClick={onClose}>
      <div
        className={compStyles.calcMultiForm}
        onClick={(e) => e.stopPropagation()}
        style={{ width: 500, overflowX: 'hidden' }} // фиксированная ширина модалки + отключена горизонтальная прокрутка
      >
        <button className={compStyles.calcClose} onClick={onClose} aria-label="Закрыть">×</button>
        <h2 className={compStyles.calcHeader}>Рассчитайте стоимость</h2>

        {/* Зафиксированная высота формы, чтобы она не прыгала при смене шагов */}
        <div
          className={compStyles.calcBody}
          style={{ height: 250, overflowY: 'auto', overflowX: 'hidden' }} // отключаем горизонтальную прокрутку
        >
          {submitted ? (
            <div className={compStyles.step} style={{textAlign: 'center', padding: 20}}>
              <h3>Спасибо за заявку!</h3>
              <p>Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className={compStyles.step}>
                  <h3>Выберите мероприятие</h3>
                  <ul className={compStyles.optionsList}>
                    {eventOptions.map(opt => (
                      <li key={opt} className={compStyles.optionItem}>
                        <label>
                          <input
                            type="radio"
                            name="eventType"
                            value={opt}
                            checked={eventType === opt}
                            onChange={() => setEventType(opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step === 2 && (
                <div className={compStyles.step}>
                  <h3>Выберите примерное количество участников</h3>
                  <ul className={compStyles.optionsList}>
                    {playersOptions.map(opt => (
                      <li key={opt} className={compStyles.optionItem}>
                        <label>
                          <input
                            type="radio"
                            name="playersRange"
                            value={opt}
                            checked={players === opt}
                            onChange={() => setPlayers(opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step === 3 && (
                <form className={compStyles.step} onSubmit={handleSubmit}>
                  {/* центрируем и ограничиваем ширину полей ввода */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, paddingTop: 6 }}>
                    <input
                      className={compStyles.input}
                      type="text"
                      placeholder="Имя"
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (error) setError(''); }}
                      required
                      style={{ width: '100%', maxWidth: 420, boxSizing: 'border-box' }}
                    />
                    <input
                      className={compStyles.input}
                      type="tel"
                      placeholder="Телефон, например +7 (912) 345-67-89"
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); if (error) setError(''); }}
                      required
                      style={{ width: '100%', maxWidth: 420, boxSizing: 'border-box' }}
                    />

                    <div style={{ marginTop: 6, width: '100%', maxWidth: 420 }}>
                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => { setConsent(e.target.checked); if (error) setError(''); }}
                          aria-checked={consent}
                        />
                        <span style={{ fontSize: 14 }}>
                          Я согласен с&nbsp;
                          <a href="https://vertigovr.ru//policy" target="_blank" rel="noopener noreferrer">
                            Политикой конфиденциальности
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>

                  {error && (
                    <div role="alert" aria-live="assertive" style={{color:'#d00', marginTop:8}}>
                      {error}
                    </div>
                  )}
                </form>
              )}
            </>
          )}
        </div>

        <div className={compStyles.stepFooter}>
          <div className={compStyles.progress}>
            <div>{step} / {totalSteps}</div>

            {/* SVG progress ring */}
            <div aria-hidden style={{width:36, height:36}}>
              <svg width="36" height="36" viewBox="0 0 36 36" style={{display:'block'}}>
                {/* background ring */}
                <circle cx="18" cy="18" r={radius} fill="none" stroke="#e6e6e6" strokeWidth="4" />
                {/* progress stroke */}
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke="#ff8a00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  style={{ transition: 'stroke-dashoffset 320ms ease' }}
                  transform="rotate(-90 18 18)"
                />
              </svg>
            </div>
          </div>

          <div className={compStyles.controls}>
            {submitted ? (
              <div style={{width:80}} />
            ) : (step > 1 ? <button className={compStyles.ghostBtn} onClick={handleBack}>Назад</button> : <div style={{width:80}}/>)
            }

            {submitted ? (
              <button className={compStyles.orangeBtn} onClick={onClose}>Закрыть</button>
            ) : (
              step < 3
                ? <button className={compStyles.orangeBtn} onClick={handleNext}>Далее →</button>
                : <button className={compStyles.orangeBtn} onClick={() => handleSubmit()} disabled={submitting}>{submitting ? 'Отправка...' : 'Отправить'}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}