// pages/api/amocrm.ts
import type { NextApiRequest, NextApiResponse } from "next";

// Функция отправки уведомления в MAX
async function sendToMax(name: string, phone: string, comment: string) {
    const MAX_BOT_TOKEN = 'f9LHodD0cOLK2Grv7qadueEvh9PJoZOzKptfrbkbR444-bTOSIpyhtRNzJPnGtZhqqMIYZjMwz0EsjfFdrdJ';
    const MAX_CHAT_ID = '-74492045124963'; // user_id или chat_id

  if (!MAX_BOT_TOKEN || !MAX_CHAT_ID) {
    console.warn('MAX: отсутствуют переменные окружения MAX_BOT_TOKEN или MAX_CHAT_ID');
    return;
  }

  const messageText = `🔔 *Новая заявка с сайта*\n\n👤 *ФИО:* ${name}\n📞 *Телефон:* ${phone}\n📄 *Комментарий:* ${comment}`;

  try {
    const response = await fetch(`https://platform-api.max.ru/messages?chat_id=${MAX_CHAT_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': MAX_BOT_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: messageText,
        format: 'markdown', // используйте 'format', если parse_mode не работает
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Ошибка MAX API:', errorData);
    } else {
      console.log('✅ Уведомление в MAX отправлено');
    }
  } catch (error) {
    console.error('❌ Ошибка при отправке в MAX:', error);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allowedOrigins = [
    'https://вертиго64.рф',
    'https://xn--64-dlcejs7bns.xn--p1ai',
    'http://вертиго64.рф',
    'http://xn--64-dlcejs7bns.xn--p1ai',
    'https://www.вертиго64.рф',
    'https://www.xn--64-dlcejs7bns.xn--p1ai',
  ];

  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') {
    if (origin && allowedOrigins.includes(origin)) {
      res.status(200).end();
    } else {
      res.status(403).end();
    }
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkMDNkYWI0MWI0MTBjZmIzY2E1ZjVlOGMyMDM2ODc0MTVkOWUzZjI5MDIyNmFkY2VlMjIwOGY0NjAxMjA2NDRlYzlhNmU3NWViYTZlYzg3In0.eyJhdWQiOiI4ODFiMTk1NS0xMDVhLTRhZmUtYWEzMS03NDljMWRmZDhmMDAiLCJqdGkiOiI5ZDAzZGFiNDFiNDEwY2ZiM2NhNWY1ZThjMjAzNjg3NDE1ZDllM2YyOTAyMjZhZGNlZTIyMDhmNDYwMTIwNjQ0ZWM5YTZlNzVlYmE2ZWM4NyIsImlhdCI6MTc1Nzc2OTg3NywibmJmIjoxNzU3NzY5ODc3LCJleHAiOjE4NjE4MzM2MDAsInN1YiI6IjEyOTUyODE4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyNjQ5MDQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYjBhMzMzNjUtZDVhMS00OTU1LTgwMTctMDBlYTU5OTk0YWNiIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.EwaanaSsm5wi49E57h5F9DCtBcvQg4C3g0ixANzzfKSZvl0_Vtl_TsjtZivVjPahzyL6P3yE-hSil_T1nhaKGAaYtE9RwghDMd6SoKEteMOh8XdLb9tFHZPW8FYLDJdq1ZSnLfQfrK3c5lerUnUK8sLsDOlJkwN5p6aJnuyYByus8Kl2ezS6X_aCEhgTMHokYtdJ_reenhtBiApudFzXDJRD-B-okD9R_AI2n-ZZ1xm6aB52pYUxtx-afStgRn08StSVANeZ50RAcvTIFTe674o3f1SJgW3ABIoKhvUxxITtPvyzrZMtI-JdoZzmolTLM3ShoCf510clbqpbarMWkQ'; // лучше вынести в .env
    const payload = req.body;

    // Отправка в AmoCRM
    const amoResponse = await fetch("https://vertigosar64.amocrm.ru/api/v4/leads/complex", {
      method: req.method,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          "name": "Заявка с сайта",
          "_embedded": {
            "contacts": [
              {
                "name": payload.name,
                "first_name": "",
                "last_name": "",
                "custom_fields_values": [
                  {
                    "field_code": "PHONE",
                    "values": [{ "value": payload.phone, "enum_code": "WORK" }]
                  }
                ]
              }
            ]
          },
          "custom_fields_values": [
            {
              "field_id": 2090633,
              "values": [{ "value": payload.comment }]
            }
          ]
        }
      ])
    });

    const amoData = await amoResponse.json();

    // После успешной отправки в AmoCRM – отправляем в MAX (не ждём, чтобы не задерживать ответ)
    // Но если хотите дождаться – используйте await, но это увеличит время ответа.
    // Рекомендуем запустить без await (fire-and-forget)
    sendToMax(payload.name, payload.phone, payload.comment);

    // Возвращаем ответ клиенту (успех AmoCRM)
    res.status(amoResponse.status).json(amoData);
  } catch (error: any) {
    console.error('Ошибка в обработчике:', error);
    res.status(500).json({ error: error.message });
  }
}