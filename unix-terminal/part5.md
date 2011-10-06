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
them. But the concept here of how the processes get organized into jobs and
sessions is relevant if you are going to use the shell. 

The usual arrangement is that when you open a terminal window, and inside the
terminal window you have a shell running that shell represents the start of a
new session and that session starts out with one job containing job one shell
process. When the shell then runs a pipeline in the foreground, the processes
of that pipeline run as the members of the existing job, the same job as the
shell. Any time though the shell creates a subshell, that subshell runs as a
new separate job. So say if you run a pipeline in the background, that creates
a sub shell, and all processes of that pipeline and that sub shell run in a
new separate job. Now associated with a session is what are called controlling
terminal, this would be the terminal which the original shell process is using
as stdin and stdout. At any moment in time, only one job in a session is
running in the foreground,  all other jobs are marked running in the  background.
Whereas precesses in the foreground job can freely read and write the controlling
terminal. Processes running in a background job gets sent the signal SIGTTIN,
when they attempt to read controlling terminal. So with the feature called job
control that modern Unix have, processes running in the so called background
are actually prevented from reading from stdin of the terminal. The other
special thing about the foreground job, is that when the user at the terminal
types Ctrl-z, this sends the signal SIGTSP, which means terminal stop, the
signal is sent to all the processes in the foreground job and default behavior
when a process receives SIGTSP is to suspend execution. What Ctrl-z also does
is sent the signal SIGCANT, as a continue to processes in this background job,
therefore resuming them if they have been suspended, and that background job
is also then moved into the foreground. So quite simply Ctrl-z will suspend
foreground job and move another background job into the foreground.

Usually when the user hit Ctrl-z in the terminal, the want to suspend whatever
jobs running and get back to their shell. So normally the background process that
gets resumed is the one that gets shell in it.

To manages the jobs running in the session of our shell, we have 3 built-in
commands. First jobs, which will list all the current jobs, and the job
numbers which are numbers assigned to uniquely identify each job. Then we have
the bg command, as background, which will, normally it does is moves the jobs
in the background, but what it really does is effectively resumes any jobs
that suspended, because that sends the signal SIGCANT to all the processes in
a background job you specify by number. This is most typically useful,
because, say, we invoke a command and then it takes too long, we want to get
back our shell, so we hit Ctrl-z, that suspends whatever program was running,
that puts it into a background job. But it suspended, we want it and resume
it, so we write bg and its job number so it can continue on in the background,
while we get to work on the shell.

Lastly, we have the command fg as in foreground, whose name correctly imply it
moves a job from background to the foreground, and in the process we also
sent SIGCANT to all the processes of that job. 

So with Ctrl-z and these commands you can control the jobs running in your
session.
