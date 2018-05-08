<h1>Technical Guide Document for Project Components</h1>
<p style="font-family:calibri;font-size:150%;> The server, quizMapper & questionSetter repositories together collaborate to create a location-based quiz with system architectural functionality provided through servers and postGreSQL databases. This document is to be used as a technical guide for the 3 components that make this system. </p>

<h2> Web Application: Question Setter </h2>
<p style="font-family:calibri;font-size:150%;> The questionSetter compnent is targeted for use in a web browser, accessible to the administrators of the system. </p>
<h3> Installation Guide </h3>
<p style="font-family:calibri;font-size:150%;>
<ul>
<li>Install this repository via terminal: git clone https://github.com/leoh94/questionSetter.git </li>
<li>Install the server via terminal: git clone https://github.com/leoh94/server.git </li>
<li>Run the HTTP server in background by going to the server directory: "~/code/server" and enter "node httpServer.js &"</li>
<li>Navigate to the questionSetter directory and run the phonegap server: "~/code/questionSetter/uceshus" and enter "phonegap serve"</li>
<li>In one of the specified browsers in the technical information section, go to the following URL: http://developer.cege.ucl.ac.uk:31263/ </li>
<li>The user guide for this app is provided at: http://developer.cege.ucl.ac.uk:31263/userGuide.html </li></ul></p>

<h3> Technical Information </h3>
<p style="font-family:calibri;font-size:150%;> 
This app was tested on the following browsers:
          <ul>
          <li>Google Chrome v66.0.3359.139 (Official Build) (64-bit)</li>
          <li>Microsoft Edge v41.16299.371.0</li>
          </ul></p>

<h2>Mobile Application: Quiz Mapper </h2>
<p style="font-family:calibri;font-size:150%;> The quizMapper component is targeted for use on an android mobile device, accessible to everyone that can connect to the UCL VPN network. This app is the client-side component and executes the location-based quiz. </p>
          <h3> Installation Guide </h3>
          <p style="font-family:calibri;font-size:150%;>
          <ul><li>Install this repository via terminal: git clone https://github.com/leoh94/quizMapper.git </li>
            <li>Install the server via terminal: git clone https:github.com/leoh94/server.git </li>
            <li>Go to https://build.phonegap.com/apps to create the mobile app.</li>
            <li>Copy and paste the quizMapper repository and create a public application.</li>
            <li>Once built for android, scan the QR code with an external QR reader app on your device to initiate download. </li>
            <li>Install the .apk file and make sure location settings are enabled on you phone. </li>
            <li>Run the HTTP server via terminal: "~/code/server" and enter "node httpServer.js &"</li>
            <li>Navigate to the quizMapper directory and run phonegap server: "~/code/quizMapper/uceshus" and enter "phonegap serve"</li>
            <li>Open the app on your device. User guide is provided at: http://developer.cege.ucl.ac.uk:31263/userGuide.html </li>
</ul></p>

            
          
            
