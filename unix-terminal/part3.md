Recall that by convention in Unix, processes expect to inherit two standard
open
file descriptors. FD 0, which we call stdin, for reading from terminal, and
FD1 called stdout for writing to that same terminal. The shell is no exception, so
both should have stdin and stdout, This means then our shell spawns off the processes
when you run the command, then those commands expect to inherit stdin and stdout.

However while processes normally expect stdin and stdout to be open to terminal, it is
sometime useful to give the process something other than the terminal for
stdin or stdout and this is called redirection. Assuming you start with a
program like the shell, that has its stdin and stdout open to a terminal
and to the same terminal. Well, if that program is then going to spawns another program by
forking itself, and then the fork executing a new program, well after the fork
but before the exec, it should close either stdin or stdout or both, and
then open one or two other files which will then take over the FD 0 and 1. Because when
you open a file in Unix, it's going to use the first available FD number, so
if you close, say FD0 stdin and then open another file immediately after you
know it's going to be open on FD 0. 

So what redirection allows is that when
the shell spawns off another program, that other program maybe stdin is still
reading from the terminal, but the stdout is writing to some other file, or
vice verse, maybe it's still writing to that terminal, but reading a standard
input from some other file, or alternatively maybe its stdin stdout have both
been redirected to some other file or finally maybe the stdin and stdout have
been redirected but to separate files. 

So to give a very simple example of how
this might be useful, say we have a program which normally prints some
information on the terminal, that is, writes stdout. Well if we redirect 
stdout, then the program instead of printing to the terminal will print to
some other file, write data to some other file, which you know might be
useful, because maybe you do not want to read the data right then, you want to
preserve it in a file, and read it later, or something along these lines.

Whatever your purpose, we can redirect to stdin and/or stdout with any
command in the shell using special character, the < and > . If in a command
you see an unquoted < , that < should be then followed by a file path, and what
this tells shell to do is to redirect stdin by closing FD0 and then
immediately after opening specified file for reading. Effectively then that file
assumes FD0 and the inheriting program is ... it reads from the stdin with
assumption that it is whatever file it suppose to be.

Likewise an unquoted > should be followed by a file path, and this tells the
shell when it executes the command to first close FD1(stdout) and immediately
then open the specified file for writing, so that it assumes FD1. Now those
redirections can actually be specified pretty much anywhere in the command.
You can put them even before the name of the command though that will be odd
thing to do. I personally prefer to put them after all the program arguments, I find
it misleading and confusing if you place them anywhere else, because it seems
to apply they are somehow a kind of argument when they are not. These are not
arguments to the program, they are special trick the shell does before even
launches the program. 

So here for example we invoke the command foo and it has two arguments, first
a string, reading bar. And another string reading 35 and the command includes
redirection both for stdin and stdout. The order in which you write them does not
matter, but here I place the redirection stdin first, so this is redirecting
stdin to a file called note.txt, and it is redirecting stdout to the file
/dev/null, which we call a special Unix file, when you write to it, the data you
write just get discarded.

This should explain now why stdin and stdout are separate FD. Because with
just one FD, to both read and write from, then we could not redirect them
independently, but by having separate FD, we can redirect them independently.

Redirection in Unix makes possible another trick called pipelining. When in the
shell we separate two commands with the pipe character, which is usually found
on the same key as your \ key. It is easy to mistake for lower case L, but it
is not it's a separate character, just a vertical bar. The shell with run
these two commands in parallel, it will run the same time and it will redirect
the stdout of the first command, which in turn is read as stdin of the 2nd
command. Effectively whatever the first command write to stdout gets read as
stdin by the 2nd command.

The reason we have to invoke a pipe is because processes can not read and write from each other 
like files, processes simply can not do that, so we have to put a pipe in the middle.

Looking at exactly what happens here, first the shell creates a pipe to
connect to processes and then the shell fork itself actually twice and then
the parent, the original shell process waits for both of those children to
complete, and then in one of the child processes, it redirects its stdout to the
pipe, the newly created pipe before that executes the first command. Meanwhile
the other child process redirect its stdin to the pipe before it executes the
2nd command. So again, these two commands execute in parallel, they are
separate processes and the original shell process wait the to terminate before
it continues its business.

When we  pipe command, we are not limited to piping just two commands
together, we can pipe 3 or more. In the case of three commands, you then put
something like this, where the first command writes stdout to a pipe and then
the pipe is read as stdin by the 2nd command which in turn writes stdout to a
2nd pipe which is read as stdin by the third command. So here when we have 3 commands connected by two pipes that actually
represents 2 pipe files, again be clear that, all these commands connected by
pipes are run in tandem,  they run in parallel. And the shell waits all to
finish before it continues. 

So moving forward, we need to be clear on terminology. What in the shell we
call pipeline refers to either a single process executed on its own or it
refers to multiple commands separated by the pipe character and therefore
executed in tandem, connected by pipes. What we call a command list is one or
more pipelines separated and terminated by ; && || or \n

So most commonly when we type commands interactively in the shell, we
terminate each pipeline by simply Enter, that insert a newline character and
the shell executes the pipeline. We can also write multiple pipelines, which
mean to be executed one after another by writing them all out separated by ;
before hitting Enter.

Here for example we have two pipelines, first consisting of just a command ls
and the second consisting of just a command cat, cat is a standard Unix
command which in this casr will print out the content of note.txt file to
stdout. But in this case what happens here is the shell will execute this
first pipeline first, wait for it finish and then executed the 2nd pipeline.
So ls will run and complete first before the shell executes cat. So the
important thing is to distinguish between ; and |. 

Here when write foo bat fizz buzz separated by ; that executes all these
commands in sequence on before another. If though we will separate them all
with pipes, that is not only connect together with pipe it also runs in
tandem. If we change the middle pipe here to a ; now this is two separate
pipelines. foo and bar runs first, when it completes it runs fizz and buzz.

bbbb
