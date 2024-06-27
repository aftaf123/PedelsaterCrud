# PedelsaterCrud


                 **Pedal Start Assignment**

Description:
This is a full stack development project where user first redirect to the home page and user can show a good nav bar including two nav elements like: Home and Add task.
And after there there is a companies logo and I am adding a simple animation of a heading which is attrack the user attention.
After there user can show all of the task which user added for there need, and each task there is a theree button like: (a) Delete, (b) Edit (c) view.

Use of all Buttons:
1. Add : There is a add button , if a user click on it there a new page will open and where user can fill the required details like : task title, description and a due date after filling all the details user can cick “Add task” button to successfully add a task for them which is also added into the mongodb database also. And when user click on the “Add thask” button user automatically redirected to the home page.

2.View: If a user click on the view button then a new page will open and user can show the detailed view about the respective task.

3.Edit: There is also a edit button if a user click on that button then user can edit all the details and when the details is updated then it is also updated in the mongodb database also.
4. Delete: There is a another button name is “delete” if a user click on it then the respective “task” is deleted form the page and database also.

Folder structure:
 
REST API in this project:
     Rest API	        URL
       GET	http://localhost:3000/tasks          
      GET	http://localhost:3000/task/:id
      GET	http://localhost:3000/ tasks/edit/:id 
          POST	/task
          POST	/tasks/update/:id
         DELETE	/tasks/delete/:id

Approach:
This project is build using Node , express and ejs.
1. At first create a folder structure and put all the appropriate code in the file.
2. Add all the dependency use the npm command
(like: npm install express) etc.
3. Create a main app.js file or server.js file where user call the routes and database and if you use and PORT and Password means any essential thing then the .env calling code etc.
4. Create a database connection code in a folde and file like (database/db.js).
5. Then you have to create a databse schema othere wise we can not put our data in to the databse.
6. Use the controller a separete file and folder for the routes functionality.
7. Then create a route for the application.
8. Use the .ejs code for frontend purpose. Where we need to create a 4 file like (home.ejs, index.ejs, edit.ejs,task.ejs) and all the file should be In the views folder only, otherwise there will be a error.
9. Create a public folder where we put our style and simple javascript code to interate with our application.


How to Run the Application:
Go the current directory of the project , if you are not in the current directory then use the 
Command (cd <your-folder-name) then in the termianl write (node <your-folder-name>.js) or you can use the (nodemon) also.

Benefit of using Nodemon:
If we use nodemon in our project then when ever we update our code and press (ctrl + s) then it is automatically run our application.

Output:
For get the output , first open a browser tab and use the (http://localhost:3000/) or the port number which you use.

Youtube video link: (https://youtu.be/_0LobRpoNcg)


