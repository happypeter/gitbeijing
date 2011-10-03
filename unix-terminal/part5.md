I mentioned earlier, that in some contexts commands can be run in what is
called a sub-shell. To illustrate here is what happens in what what we can
think of as the normal case, where we have the shell and it runs a command
process, by simply forking itself. And while the parent process the original
shell waits the child process, the child shell executes the command
executable. 

When a command is executed in a sub shell however, the shell again forks
itself for usual, but then it is the sub shell which forks itself, and waits
while its child forks execs the actual process executable. Again, the reason
why this is important to understand when this happens is because that in sub
shell, any changes made by that process does not affect the parent shell from
which it spawned.

So we if we assign to variable  in sub shell, the change won't be seen in
shell from which it spawned. 

For reason, which at this point very obscure, I can not really explain here,
you way wish to execute a command list in a sub shell, and we can do this with
what is considered a operator a pair of parentheses.  So here if I write this
comand list and put them in (), that will execute in in shell itself, but in a
newly spawned sub shell thereof.

So here  a example, the first command in () is a invocation of a built-in cd,
and cd as I explained will change CWD of the shell, but because it is running
in a sub shell here this will only affects sub shell, not the shell from which
it spawned. 

So that perhaps one reason why you might wish to use these parentheses to run
in a subshell, because you want to invoke commands which will affect the
shell, but you want the affect of these changes only to be seen in a limited
scope. 

However, similar syntax using {} instead of () will execute the command list
in the current shell rather in the sub shell. The syntax for this though is
actually quite different,  because the { ( the begin curly brace) that is
really a built-in command, { is just a name of a built-in. Because this is a
built-in and not a operator, there has to be a space after the opening curly
brace and before the end curly brace, which is just a argument to the built-in
that signifies the end of command list. You may know this superficially these
{} here resemble the curly brace we see in a function, really they are quite
separate things, they not related, When you use the function built-in and you
write the curly braces for it, they are not same thing as built-in, even
though they pretty much have the same effect.

In any case, you probably wondering what the hell is the purpose of this,
before if I want to write a sequence of commands I do not have to write them
as a command list like this, I can just write them one after another, so when
would I ever use this. Well the answer here is that if you use redirection on
these {} built-in, that will effectively redirect all of the commands in a
command list. So it simply not convenient when you want to apply the same
redirection to a series of commands. 

If you are wondering ...
