// let homePage = `
//   <h2>Hello world!</h2>
//   <ul>
//     <li><a href="/todolist">Todo List</a></li>
//     <li><a href="/credits">Meet the Team</a></li>
//   </ul>
// `;
let loginPage = `
<div class="signuploginbutton">
      <a href="#" class="loginbutton">LOGIN</a>
      <a href="SignupScreen.html" class="signupbutton" >SIGNUP</a>
    </div>

    <div class="login-box">
      <div class="textbox">
        <i class="fas fa-envelope"></i>
        <input type="text" placeholder="Email" name="" value="">
      </div>
      <div class="textbox">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" name="" value="">
      </div>
      <div>
      <input class="btn" type="button" name="" value="Sign in">
    </div>
    </div>
`;

let signupPage =`

  <div id="login-box"></div>
    <div class="box">
        h1> Sign Up</h1>

          <input type="text" name="username" placeholder="Username"/>
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>

          <input type="password" name="password2" placeholder="Retype password"/>

          <input type="submit" name="signup-button" value="Sign Up"/>

    </div>
`;

let mainPage = `
<div class="tab_dropdown">
      <a href="all tasks page.html"><button style="background-color: #e29f5f" class="dropbtn main all"><i class="fas fa-tasks"></i>All Tasks</button></a>

      <button style="background-color: #d7d66a" class="dropbtn main"><i class="fas fa-calendar-alt" href="calendar.html"></i>Calender</button>

      <a href="important tasks page.html"><button style="background-color: #84a2e6" class="dropbtn main imp"><i class="fas fa-exclamation" href="important tasks page.html"></i>Important Tasks</button></a>

      <a href="notifications page.html"><button style="background-color: #e75353" class="dropbtn main notif"><i class="fas fa-bell"></i>Notifications</button></a>

</div>

<div class="middle_bar" >
  <h1>Personalized list</h1>
</div>

<div class="tab_dropdown">

      <a href="work page.html"><button style="background-color: rgb(82, 166, 128)" class="dropbtn main work"><i class="fas fa-briefcase"></i>Work</button></a>

      <button style="background-color: rgb(176, 109, 133)" onclick="dropdown_function()" class="dropbtn main school"><i class="fas fa-school"></i>School</button>

      <a href="/home"><button style="background-color: #9b80c6" class="dropbtn main home"><i class="fas fa-home"></i>Home</button></a>

      <button style="background-color: #84cbbd" class="dropbtn main shop"><i class="fas fa-shopping-cart"></i>Shopping list</button>

</div>`;

let allPage = `

  <div class="task">
    <a  href="Mainscreen.html" ><button class="btn"><i  class="fa fa-home"></i></button></a>

      <h3>All Tasks</h3>
  </div>

    <p class="line1"> </p>

    <main class="content1"></main>

  <div>

    <h2 id="current-date">October 1st, 2018</h2>
  </div>

  <article class="task-list">
      <label class="container" type="button" onclick="">
        Walk the dog
      </label>

      <label class="container complete one">
        Call the drycleaners
      </label>

      <label class="container one">
        Order invitations
      </label>

      <label class="container one">
        Buy gift
      </label>

      <label class="container one">
        Buy decorations
      </label>
  </article>
`;

let calendarPage = `

<div class="container">
    <div class="month">
      <strong> November </strong>
      <br>
      <strong> 2018 </strong>
    </div>
      <table>
        <tr>
          <th> Sun </th>
          <th> Mon </th>
          <th> Tue </th>
          <th> Wed </th>
          <th> Thu </th>
          <th> Fri </th>
          <th> Sat </th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
        </tr>
        <tr>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
        </tr>
        <tr>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
        </tr>
        <tr>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td></td>
        </tr>
      </table>

  </div>
`;

let importantPage = `

<div class="task">
  <a  href="Mainscreen.html" ><button class="btn"><i  class="fa fa-home"></i></button></a>
  <h3>Important Tasks</h3>
</div>

<p class="line2"> </p>

    <body class="content2">

<div>
<h2 id="current-date">October 1st, 2018</h2>
</div>

<main class="task-list">
  <label class="container two">
          <button onclick="dropdown_function()" class="dropbtn">Throw Jamie's birthday party</button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#placeholder">
              <label class="container complete dropDown">Send Invitations
              </label>
              <label class="container dropDown">Buy Gifts
              </label>
            </a>
          </div>
  </label>

  <label class="container complete two">
    Pay water bill
  </label>

  <!-- <label class="container complete two">
    Make cupcakes for Sophia's bake sale
  </label> -->

  <button  class="container two btn" type="button" onclick="myFunction()">
    Make cupcakes for Sophia's bake sale
  </button>

  <label class="container complete two">
    Schedule Jamie's dentist appointment
  </label>
</main>

`;

let notifPage = `

<div class="task">
    <a  href="Mainscreen.html" ><button class="btn"><i  class="fa fa-home"></i></button></a>
      <h3>Notifications</h3>
</div>

<p class="line5"> </p>

    <main class="content5"></main>

<div>
  <h2 id="current-date">October 1st, 2018</h2>
</div>

<article class="task-list">

  <label class="container complete five">
    <input type="radio" name="Notification" value="Call Anna">
      Call anna <br>
  </label>

  <label class="container five">
    <input type="radio" name="gender" value="female">
      Finish Report<br>
  </label>

  <label class="container five">
    <input type="radio" name="gender" value="other">
      Pick up mail<br>
  </label>

</article>
`;

let workPage =`
<div class="task">
  <a  href="Mainscreen.html" ><button class="btn"><i  class="fa fa-home"></i></button></a>
  <h3>Work</h3>
</div>

<p class="line3"> </p>

  <main class="content3"></main>

      <div>
        <h2 id="current-date">October 1st, 2018</h2>
      </div>

    <article class="task-list">
      <label class="container three">
        Prepare for presentation
      </label>

      <label class="container complete three">
        Fax Lena the files
      </label>

      <label class="container three">
        Meeting with board members
      </label>

      <label class="container three">
        Check stats
      </label>

      <label class="container three">
        Lunch meeting with Katie and John
      </label>
    </article>
`;

let homePage = `

<div class="task">
  <a  href="Mainscreen.html" ><button class="btn"><i  class="fa fa-home"></i></button></a>

    <h3>Home</h3>
</div>

  <p class="line4"> </p>

<main class="content4"></main>

<div>
    <h2 id="current-date">October 1st, 2018</h2>
</div>

<article class="task-list">
    <label class="container four">Soccer game after school
    </label>

    <label class="container complete four">Do Laundry
    </label>

    <label class="container four">Get ink for printer
    </label>

    <label class="container four">Take Sammy to the vet
    </label>

    <label class="container four">Buy more wine
    </label>
</article>
`;
