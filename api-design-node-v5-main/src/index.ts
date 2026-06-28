/* entry to our 
application 
*/

import app from "./server.ts";

const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})