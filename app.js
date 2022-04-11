const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('engine view', 'ejs');

const homeStartingContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium sodales ex, id efficitur est scelerisque et. Vestibulum gravida nisi arcu, a maximus risus porttitor nec. Sed ut nunc quam. Integer ac metus quis dui maximus bibendum sit amet sed felis. Aenean in elit euismod, semper nisi ac, viverra nibh. Nulla vel est purus. Pellentesque malesuada tempus augue eu maximus. In consequat fermentum mauris, sit amet bibendum libero semper at. Nunc sit amet tellus fermentum, venenatis nibh non, consectetur purus.';
const aboutContent = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum euismod nulla id enim ullamcorper ornare. Cras nec erat sem. Suspendisse vestibulum vel felis a tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fringilla nibh et justo eleifend finibus. Quisque justo nulla, vulputate et quam et, ullamcorper fringilla mauris. Duis porttitor arcu at turpis auctor, eget interdum felis varius. Sed laoreet purus ex, sit amet interdum nibh faucibus eu. Vestibulum eu felis quis lorem tristique rutrum vel ac nisi.';
const contactContent = 'In sit amet lacus a augue maximus dapibus vitae vel mi. Suspendisse potenti. Sed ut sem est. Suspendisse tempor mollis fringilla. Donec elementum eget risus eu hendrerit. Etiam ac volutpat sem. Maecenas elementum nulla vel est condimentum, in sollicitudin metus blandit. Curabitur auctor imperdiet volutpat. Sed volutpat dictum sem, vitae volutpat quam efficitur in. Morbi nec augue nec enim sagittis semper. Nam nec justo non dui tincidunt elementum non quis risus. Cras at elit sed est viverra tempus. Nam ipsum nibh, placerat dictum mi ut, auctor interdum ex. Pellentesque ut ipsum ut massa facilisis vulputate eget at arcu. Praesent a ligula pretium tellus feugiat scelerisque a sed justo.';



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
})