import axios from "axios";
import admin from "../../../firebase/firebase-admin";
import { getAuth } from 'firebase-admin/auth';
import { createAgentService } from '../../../services/agentservice';



export default async function addagent(req, res) {

    const body = req.body;

    try {

       return getAuth().createUser({
            phoneNumber: `+91${body.phone}`,
            displayName: body.name
        })
            .then(async (record) => {
                const data = { ...body, uid: record.uid };
                const response = await createAgentService(data);
                return res.status(200).json(response);
            })


    }
    catch (error) {
        return res.status(500).json({ error: "please try again" });
    }

}
