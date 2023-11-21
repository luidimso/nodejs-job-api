**_STEP BY STEP_**

1. Create the project
   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. ``` npm init ```<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. create app.js file<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. create config/config.env file<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. configure app.js file with dotenv.config and app.listen<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e. install package ``` npm i express dotenv --save ```<br>

2. Set the scripts to run project

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. install ``` npm i nodemon --save-dev ```<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. add scripts ``` "start": "node app.js", "dev": "nodemon app.js", "prod": "export NODE_ENV=production && nodemon app.js" ```