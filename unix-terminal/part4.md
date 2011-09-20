Like any programming languages, the shell allows us to create functions, and
we do so with a built-in command `function`. Function expects as first
argument the name of the function you are defining, followed by a pair of
curly braces, inside which is a command list, which is the body which gets
invoked when we invoke the function.

So here for example we define a function which we give the name foo, and that
have a body of two commands, first invoking ls, and then the built-in cd. And
we should know that because the command list is delimited by {}, we can then
actually spread the command-list on to multiple lines, so we don't have to
write the function all in one line, we can write the same function like so. 

And because the spaces are furnel and basically are ignored, we can indent how we
like  we will probably indent like this. 

Once we've defined the function we can invoke it like any other command. You
start the command with the name of that command, and in this case it is the
name of the function. The question then arises, what happens with name
collisions between function names and the names of built-in commands, and also
of regular process commands. Well the answer is the shell basically has a
order of precedence, when it sees a command name with no slash in it. It first
assumes the name refers to a function, but if there is no function of that
name, it then check to see if the name is a built-in command, finally failing
that, then the shell will look at the directories of the PATH to see if it can
find a executable of that name. So just understand that functions take
precedence, if you define a function and call it cd, then anytime we try to
invoke the built-in cd command, instead we will be invoking the function we've
defined.

While we are on subject of name spaces, I should mention that functions and
variables live in separate name spaces, so if we have variable name foo, we
can also have a function named foo, there is no interfere, they live in
different name spaces.

Now when we define a function, we don't specify any name for parameters that
function expects to receive. Instead arguments passed to function are always
assigned to special parameter names 1 2 3 4 ans so forth. So in the body of
the function, we get the first argument value with the syntax $1, and the
value of the second argument with $2, the 3rd $3, and so forth. So here this
function foo, its body consists of 2 commands, first cd with a argument of $2,
that is the value of 2nd argument passed to foo, and the 2nd command here ls, has a single argument which
is the value of the  1st argument to the function. So in the next line when we
invoke this function, the first argument /bin, and the second is /home. So
what this function will do is first change the current working directory to
/home, and then list the contents of the /bin directory.

When we invoke a function, the exit status of that invocation is normally the
exit status of the last command executed within the function. With the
built-in return function however, we can explicitly return a value from a
function and also cause execution to leave a function early. So it is just
like in python or javascript, a return statement may be encountered before the
very end of the function.
