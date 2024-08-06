import { itemcollection as mylistmain } from "./script.module.js";

const mylist = mylistmain();

mylist.listitems();
mylist.additems("one");
mylist.additems("two");
mylist.additems("three");
mylist.additems("four");

mylist.listitems();
// mylist.remove("three");
mylist.remove("seven");

mylist.additems("three");

mylist.listitems();
