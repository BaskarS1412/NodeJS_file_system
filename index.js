import express from 'express';
import fs from 'fs';
import { format } from 'date-fns';

const app = express();
const PORT = 4000;

app.get('/write', (req, res) => {
    let todayDateAndTime = format(new Date(), 'dd-MM-yyyy-HH-mm-SS');
    const filePath = `TimeStamp/date-time.txt`;
    fs.writeFileSync(filePath, `${todayDateAndTime}`, 'utf8');
    res.status(200).send("The given file is created");
});

app.get('/read-file', (req, res) => {
    const readFilePath = `TimeStamp/date-time.txt`;
    let data = fs.readFileSync(readFilePath, "utf8");
    res.status(200).send(data);
});

app.listen(PORT, () => {
    console.log(`app is running ${PORT}`);

});
