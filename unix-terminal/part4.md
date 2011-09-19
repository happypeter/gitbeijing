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
collisions
