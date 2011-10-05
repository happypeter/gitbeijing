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

If you are wondering what the ES of this { built-in is, it is simply the last
command executed in the command list.

Now where sub shells most commonly come into play is with the use of & terminator, if we
terminate a pipeline with &, rather than the ; or the newline, then the pipeline
runs in the so called background, as oppose to the usual foreground. What it
means to run in background is first of all the shell will not wait for
pipeline to complete, secondly it means commands of pipeline are run in sub
shell, it is the subshell which will wait the pipeline. Additionally anything
runs in the background should not read from the terminal from which it
spawned, because it will interfere the continue operation of the shell, when
we start something in background from the shell, we want to  execute while we
are continue to use the shell, we do not want to interfere the use of the
shell, so it should not read the terminal. 

In some cases, you may also prefer that something runs in the background
should not write to the terminal either, because that might interfere your use
or at least might confuse you, so you may choose to redirect the stdout of a
pipeline running in the background so that you do not see any output, but it a
matter of preference, whether or not you allow something running in the
background to write to your terminal. Reading from your terminal however that
is forbidden, because that way it would not run in the background.

Consider a example use of the & terminator, here the foo command will be run
in the background and even before it finishes running, the shell will then
invoke bar, the shell will then wait for bar however, because bar is
terminated by ; and then it will run fizz, and again wait for fizz, because it is terminated
by ;, but then once fizz completed, the shell will run buzz in the background,
so the shell will invoke buzz, but not wait for it to complete.

Just like we can apply redirections to the whole of command list in () and {},
we can terminate these with & to run them in the background. And the
interesting thing here is that because running in the background always
involves a subshell, effectively the behavior here is precisely the same,
while {} command does not normally involves a subshell, here because it is
running in the background, it does. 

To make the foreground and background distinction more useful, modern Unix has
introduces feature called job control, which involves organizing processes
first in group called jobs, and those so called jobs in turn get organized
into what are called sessions. 

A process's membership in a job and session actually is a property of the
process itself, keep track of by the operating system, and there are system
calls which we did not mention in previous unit for setting a process's
membership in a job, and a job's membership in a session. We won't go into the
details because they are system calls that are used pretty much by shells, so
unless you are going to write your own shell, you will never have to deal with
them. But the concept here 
