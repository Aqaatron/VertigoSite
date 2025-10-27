// pages/api/amocrm.ts
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkMDNkYWI0MWI0MTBjZmIzY2E1ZjVlOGMyMDM2ODc0MTVkOWUzZjI5MDIyNmFkY2VlMjIwOGY0NjAxMjA2NDRlYzlhNmU3NWViYTZlYzg3In0.eyJhdWQiOiI4ODFiMTk1NS0xMDVhLTRhZmUtYWEzMS03NDljMWRmZDhmMDAiLCJqdGkiOiI5ZDAzZGFiNDFiNDEwY2ZiM2NhNWY1ZThjMjAzNjg3NDE1ZDllM2YyOTAyMjZhZGNlZTIyMDhmNDYwMTIwNjQ0ZWM5YTZlNzVlYmE2ZWM4NyIsImlhdCI6MTc1Nzc2OTg3NywibmJmIjoxNzU3NzY5ODc3LCJleHAiOjE4NjE4MzM2MDAsInN1YiI6IjEyOTUyODE4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyNjQ5MDQ2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYjBhMzMzNjUtZDVhMS00OTU1LTgwMTctMDBlYTU5OTk0YWNiIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.EwaanaSsm5wi49E57h5F9DCtBcvQg4C3g0ixANzzfKSZvl0_Vtl_TsjtZivVjPahzyL6P3yE-hSil_T1nhaKGAaYtE9RwghDMd6SoKEteMOh8XdLb9tFHZPW8FYLDJdq1ZSnLfQfrK3c5lerUnUK8sLsDOlJkwN5p6aJnuyYByus8Kl2ezS6X_aCEhgTMHokYtdJ_reenhtBiApudFzXDJRD-B-okD9R_AI2n-ZZ1xm6aB52pYUxtx-afStgRn08StSVANeZ50RAcvTIFTe674o3f1SJgW3ABIoKhvUxxITtPvyzrZMtI-JdoZzmolTLM3ShoCf510clbqpbarMWkQ'
        const payload = req.body
        //console.log('i got', payload)
        const response = await fetch("https://vertigosar64.amocrm.ru/api/v4/leads/complex", {
            method: req.method,
            headers: {
                "Authorization": `Bearer ${token}`, // your OAuth token
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
                                        "values": [
                                            {
                                                "value": payload.phone,
                                                "enum_code": "WORK"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "custom_fields_values": [
                        {
                            "field_id": 2090633,
                            "values": [
                                {
                                    "value": payload.comment
                                }
                            ]
                        }
                    ]
                }
            ])
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}
