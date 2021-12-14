import axios from "axios";
import admin from "../../../firebase/firebase-admin";
import { getAuth } from 'firebase-admin/auth';
import { createAgentService } from '../../../services/agentservice';


export default async function addagent(req, res) {

    const body = req.body;
    const response = "";

    try {

        getAuth().createUser({
            phoneNumber: `+91${body.phone}`,
            displayName: body.name
        })
            .then((record) => {
                const data = { ...body, uid: record.uid };
                console.log("User Record UID", record.uid)
                response = await createAgentService(data);
            })

        return res.send(200).json({ payload: response });
    }
    catch (error) {
        return res.send(500).json({ error: "please try again" });
    }

}
