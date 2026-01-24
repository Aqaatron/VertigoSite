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
  const [step, setStep] = React.useState(1);
  const [eventType, setEventType] = React.useState('');
  const [players, setPlayers] = React.useState<string>('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleNext = () => { if (step < 3) setStep(s => s + 1); };
  const handleBack = () => { if (step > 1) setStep(s => s - 1); };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // minimal validation: имя и телефон должны быть заполнены
    if (!name || !phone) {
      // если не заполнено, переводим пользователя на шаг с контактами
      setStep(3);
      return;
    }

    const data: CalcData = { eventType, players, name, phone };

    // Подготовка тела сообщения (так же, как в PromoForm.sendMessage)
    const body = `Форма расчёта:\nТип мероприятия - ${eventType}\nКоличество участников - ${players}\nФИО - ${name}\nТел - ${phone}`;

    // ym (метрика), Telegram и внутренний /api/sendForm
    try {
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
          phone,
          comment: `Запрос расчёта: ${eventType}; players: ${players}`
        })
      });
    } catch (err) {
      // логируем ошибку в консоль — не прерываем UX
      // eslint-disable-next-line no-console
      console.error('Ошибка отправки формы расчёта', err);
    }

    if (onSubmit) onSubmit(data);
    onClose();
  };

  // progress circle calculation
  const totalSteps = 3;
  const percent = Math.round((step / totalSteps) * 100); // 1->33, 2->66, 3->100
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - percent / 100);

  return (
    <div className={compStyles.calcOverlay} onClick={onClose}>
      <div className={compStyles.calcMultiForm} onClick={(e) => e.stopPropagation()}>
        <button className={compStyles.calcClose} onClick={onClose} aria-label="Закрыть">×</button>
        <h2 className={compStyles.calcHeader}>Рассчитайте стоимость</h2>

        <div className={compStyles.calcBody}>
          {step === 1 && (
            <div className={compStyles.step}>
              <h3>Выберите мероприятие</h3>
              <ul className={compStyles.optionsList}>
                {[
                  'День рождения',
                  'Мероприятие для школьников',
                  'Вечеринка',
                  'Семейный отдых'
                ].map(opt => (
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
                {[
                  'до 5 человек',
                  '6-12 человек',
                  '13-17 человек',
                  'Более 18 человек',
                  'Пока не знаю'
                ].map(opt => (
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
              <h3>Контакты</h3>
              <input
                className={compStyles.input}
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className={compStyles.input}
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </form>
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
            {step > 1 ? <button className={compStyles.ghostBtn} onClick={handleBack}>Назад</button> : <div style={{width:80}}/>}
            {step < 3
              ? <button className={compStyles.orangeBtn} onClick={handleNext}>Далее →</button>
              : <button className={compStyles.orangeBtn} onClick={() => handleSubmit()}>Отправить</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}