import React from "react";
import compStyles from '@/widgets/promo/startPromo/startPromo.module.scss';

type CalcData = {
  eventType: string;
  players: number | '';
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
  const [players, setPlayers] = React.useState<number | ''>('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleNext = () => { if (step < 3) setStep(s => s + 1); };
  const handleBack = () => { if (step > 1) setStep(s => s - 1); };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const data: CalcData = { eventType, players, name, phone };
    if (onSubmit) onSubmit(data);
    onClose();
  };

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
              <h3>Количество участников</h3>
              <input
                className={compStyles.input}
                type="number"
                min={1}
                placeholder="Пример: 10"
                value={players}
                onChange={(e) => setPlayers(e.target.value === '' ? '' : Number(e.target.value))}
              />
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
            <div>{step} / 3</div>
            <div className={compStyles.progressRing} aria-hidden />
          </div>

          <div className={compStyles.controls}>
            {step > 1 ? <button className={compStyles.ghostBtn} onClick={handleBack}>Назад</button> : <div style={{width:80}}/>}
            {step < 3
              ? <button className={compStyles.orangeBtn} onClick={handleNext}>Далее →</button>
              : <button className={compStyles.orangeBtn} onClick={handleSubmit}>Отправить</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}