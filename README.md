<h1>Technical Guide Document for Project Components</h1>
<p style="font-family:calibri;font-size:150%;> The server, quizMapper & questionSetter repositories together collaborate to create a location-based quiz with system architectural functionality provided through servers and postGreSQL databases. This document is to be used as a technical guide for the 3 components that make this system. <p>

<h2> Web Application: Question Setter </h2>
<p style="font-family:calibri;font-size:150%;> The questionSetter compnent is targeted for use in a web browser, accessible to the administrators of the system. </p>
<h4> Installation Guide </h4>
<p style="font-family:calibri;font-size:150%;>
<ul>
<li>Install this repository via terminal: git clone https://github.com/leoh94/questionSetter.git </li>
<li>Install the server via terminal: git clone https://github.com/leoh94/server.git </li>
<li>Run the HTTP server in background by going to the server directory: "cd server" followed by "node httpServer.js &"</li>
<li>Navigate to the questionSetter directory and run the phonegap server: "cd ..", "cd questionSetter", "cd uceshus", "phonegap serve"</li>
<li>In one of the specified browsers in the technical information section, go to the following URL: http://developer.cege.ucl.ac.uk:31263/ </li>
<li>The user guide for this app is provided at: http://developer.cege.ucl.ac.uk:31263/userGuide.html </li>
<h4> Technical Information </h4>
<p style="font-family:calibri;font-size:150%;> 
