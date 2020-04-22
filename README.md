# nodejs-express-sample-v1

# git
git init  
git add .  
git commit -m "first commit"  
git remote add origin https://github.com/blockodyssey-bckim/nodejs-express-sample-v1.git  
git push -u origin master  

# add .gitignore
node  
vscode

# pm2
pm2 init|ecosystme [null|simple]  
script: './bin/www',  

# nodemon
npm i nodemon -D  
"start": "nodemon ./bin/www"

# config & env
"start": "NODE_ENV=development DEBUG=app:* nodemon ./bin/www"  
set env.json on config

# dubug
set log prifix to config 

