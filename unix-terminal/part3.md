Recall that by convention in Unix, processes expect to inherit two standard
open file descriptors. FD 0, which we call stdin, for reading from terminal,
and FD1 called stdout for writing to that same terminal. Your shell is no
exception, so should both have stdin and stdout, This means then our shell
spawns off the processes when you run the command, then those commands expect
to inherit stdin and stdout.

However while processes normally expect stdin and stdout to be open to
terminal, it is sometime useful to give the process something other than the
terminal for stdin or stdout and this is called redirection. Assuming you
start with a program like the shell, that has its stdin and stdout open to a
terminal and to the same terminal. Well, if that program is then going to
spawns another program by forking itself, and then the fork executing a new
program, well after the fork but before the exec, it should close either stdin
or stdout or both, and then open one or two other files which will then take
over the FD 0 and 1. Because when you open a file in Unix, it's going to use
the first available FD number, so if you close, say FD0 stdin and then open
another file immediately after you know it's going to be open on FD 0. 

So what redirection allows is that when the shell spawns off another program,
that other program maybe stdin is still reading from the terminal, but its
stdout is writing to some other file, or vice verse, maybe it's still writing
to that terminal, but reading a standard input from some other file, or
alternatively maybe its stdin stdout have both been redirected to some other
file or finally maybe the stdin and stdout have been redirected but to
separate files. 

So to give a very simple example of how
this might be useful, say we have a program which normally prints some
information on the terminal, that is, writes stdout. Well if we redirect 
stdout, then the program instead of printing to the terminal will print to
some other file, write data to some other file, which you know might be
useful, because maybe you do not want to read the data right then, you want to
preserve it in a file, and read it later, or something along these lines.

Whatever your purpose, we can redirect to stdin and/or stdout with any command
in the shell using special characters, the < and > . If in a command you see
an unquoted < , that < should be then followed by a file path, and what this
tells shell to do is to redirect stdin by closing FD0 and then immediately
after opening specified file for reading. Effectively then that file assumes
FD0 and the inheriting program is non the wiser, it reads from the stdin with
assumption that it is whatever file it suppose to be.

Likewise an unquoted > should be followed by a file path, and this tells the
shell when it executes the command to first close FD1(stdout) and immediately
then open the specified file for writing, so that it assumes FD1. Now those
redirections can actually be specified pretty much anywhere in the command.
You can put them even before the name of the command though that will be odd
thing to do. I personally prefer to put them after all the program arguments,
I find it misleading and confusing if you place them anywhere else, because it
seems to apply they are somehow a kind of argument when they are not. These
are not arguments to the program, they are special trick the shell does before
even launches the program. 

So here for example we invoke the command foo and it has two arguments, first
a string, reading bar. And another string reading 35 and the command includes
redirections both for stdin and stdout. The order in which you write them does not
matter, but here I place the redirection stdin first, so this is redirecting
stdin to a file called note.txt, and it is redirecting stdout to the file
/dev/null, which we call, is a special Unix file, when you write to it, the data you
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
it continues on its business.

When we pipe commands, we are not limited to piping just two commands
together, we can pipe 3 or more. In the case of three commands, you then put
something like this, where the first command writes stdout to a pipe and then
that pipe is read as stdin by the 2nd command which in turn writes stdout to a
2nd pipe which is read as stdin by the third command. So here when we have 3
commands connected by two pipes that actually represents 2 pipe files, again
be clear that, all these commands connected by pipes are run in tandem,  they
run in parallel. And the shell waits all to finish before it continues. 

So moving forward, we need to be clear on terminology. What in the shell we
call pipeline refers to either a single process executed on its own or it
refers to multiple commands separated by the pipe character and therefore
executed in tandem, connected by pipes. What we call a command list is one or
more pipelines separated and terminated by ; && || or \n

So most commonly when we type commands interactively in the shell, we
terminate each pipeline by simply Enter, that insert a newline character and
the shell executes the pipeline. We can also write multiple pipelines, which
mean to be executed one after the other by writing them all out separated by ;
before hitting Enter.

Here for example we have two pipelines, first consisting of just a command ls
and the second consisting of just a command cat, cat is a standard Unix
command which in this case will print out the content of note.txt file to
stdout. But in this case what happens here is the shell will execute this
first pipeline first, wait for it to finish and then executed the 2nd pipeline.
So ls will run and complete first before the shell executes cat. 

So the important thing is to distinguish between ; and |.  Here when write foo
bat fizz buzz separated by ; that executes all these commands in sequence one
before the other. If though we will separate them all with pipes, that is not
only connect together with pipe it also runs in tandem. If we change the
middle pipe here to a ; now this is two separate pipelines. foo and bar runs
first, when they complete the shell runs fizz and buzz.

I mentioned in past that the pipeline can be terminated by &, but the
significance of that will be discussed later.

Someone analogies to way functions return values, every command of the shell
returns what are called a exit status, or sometimes exit code. The exit status
is always a integer and by convention the value 0 is used to denote the
command completed successfully without error, while any value other than 0 by
convention indicates some kind of error. What that error is exactly depends
upon the particular program. So if you run a program and get back a non-zero
exit status, you should go and look the program's documentation to figure out
what it supposes to mean.

You maybe wondering where command exit status(ES) comes from, if you recall
back to our discussion of system call, there is a system call called exited to
which we pass a number. That number we pass to that exit system call is the
exit status returned by the program. When the parent process invoke the wait
system call to wait for its children, what wait returns is the exit status
from that child. So it is the shell which collects the ES of any command it
runs.

So the question now is that for me, the user of the shell, what can I do with
the ES. Well one thing we might do is to connect two pipelines with && or ||.
With &&, the shell will first run pipeline A, and then if the last command of
A returns the ES 0, then the shell will run pipeline B, otherwise if the last
command of pipeline A returns something other than 0, then the shell will not
run pipeline B, it will get skipped over. 

So the execution of pipeline B here effectively becomes conditional upon the
successful execution of pipeline A. || works exactly the same except reversed
logic, such that pipeline B will only run if the last command of pipeline A
only returns something other than 0, if instead it return 0, then pipeline B
get skipped over, does not get executed.

So here for example, foo is executed, and its ES is 0, then bar is executed,
otherwise it get skipped over, then whether bar runs or not, the fizz command
is executed because it is separated by ;, the ; here has a lower precedence
then either && or ||. So you and sort of think it as () around the first
two commands here and the second two commands. Though I do not means that in a
literal sense. Because we do not use parentheses exactly like that in the shell
they do not group commands the same way like you group expressions. But in any
case so the fizz command here will run and if it runs something other than 0,
then the buzz command will return, otherwise fizz does return 0, buzz will not
run. 

So the && and || are the two ways you can utilize return codes. As we will see
mainly in the supplement,, there are other ways to use ES.

So far I've only discussed of what I call process commands, commands which are
actually executable programs. There is another kind of programs however called
built-in command, which is a command implemented in the shell itself. So when
we execute a built-in command, that just runs code in the shell itself, there
is no spawned off process. As we will get into though, there is what we call a
subshell, which is essentially a fork of a process, and in some cases, you may
end up running a built-in command that runs not in the main shell process, but
possibly in the fork of the shell. Also, while the built-in commands do run in
the shell, they still do allowed for redirection and piping. When the built-in
command is redirected, the shell does not actually redirect its stdin and
stdout, but just for the fake of one built-in command it will arrange things
to get the same end result. Basically, what happens is that every built-in
command is given a duplicate of the stdin and stdout FD, and if you redirect
a command for built-in that duplicate for that built-in command is redirected,
so it does not affect the other commands, just that one command. How exactly
this is done is of course a implementation detail of the shell, which you do
not need to concern yourself with.

In any case, bash has about 70 different built-in commands. And the first one
we will discuss is the help command. The help command simply prints out to
stdout the info on how to use the built-in command, including the help command
itself, so if at the shell you type help and hit enter, you get a list of all
built-in commands, and if you want more detail on one of these commands, you
simply type help name-of-the-command and Enter. Then the help command will
print out detailed info of whatever command you specify. 

Be clear that the help command only give info on the shell's built-ins, it
does not give any info on regular Unix utilities like say the ls program. If
you want to see doc for standard Unix utilities, like ls, there is a standard
Unix utility for that purpose, this is called man, as manual, short for
manual. We will talk about how to use man in the supplement.

Another built-in command is cd, which is short for change directory, and what
it does is it sets the CWD(or the process working dir) of the shell process
itself. And so it should be apparent why this is a built-in command, not just
a standard Unix utility, why it is not a separate program. Because separate
processes can not modify the shell's CWD, only the shell process itself can do
that. This is a important thing to keep in mind, because in some context as I
mentioned, built-in commands run not in shell itself, but in a subshell, that is
a fork of the shell, so you want to make sure you want to change the CWD of
your main shell, you want to make sure, that runs in that shell process, not
in a subshell. If you run a cd command in a subshell, that will be modifying
the CWD of the fork, of the subshell, not of the shell from which it spawned.

In any case, here is a example of using cd command, say here is my prompt. I
am user brain, login in on the system ubuntu with the CWD of /home/brain, so
if I enter the command cd /bin, then that is changing my CWD to /bin. And you
can see the change of the directory in the next prompt. If I then enter the
command cd /, that is changing my CWD to the root dir, the /. So the next
prompt we get, displays the CWD as /. 

A important thing to keep in mind is that when we fork a process in Unix, the
fork, the child inherits the CWD from the parent. So any command we run from
the shell inherits the CWD of the shell itself. And this is significant,
because my commands will use of the CWD, as a default argument for a file
path, when no file path argument is given. Like for example the ls command, if
we don't give a program argument specifying a dir whose context we wish to
list. Then the ls command assumes we wish to list the content of CWD. So in
fact if you run ls with no arguments at all, then whatever print out is the
contents of the CWD of your shell.

The built-in command echo, simply prints out its arguments to stdout. So here
for example, we have echo foo 2348, then that simply prints out to stdout the text
foo 2348. Now of course this may not seem useful, at the command prompt,
because why we want to shell just give us back exactly what we just typed. But
one way this is useful is that in various way we have not yet discussed, the
shell, when we use certain special syntax in the arguments processes the
arguments such that what I just sent to the command is different from what you
literally type. For example the $ especially denotes the syntax for what is
called variable expansion. The shell again is basically a interpretor, it is
effectively a programming language, and like any programming language, we have
the ability to assign value to variables. The syntax for this is simply to
write the name of the variable you wish to create or modify. Followed
immediately with a =, and then everything that follows the = is considered the
value being assigned to that name. Effectively all text that follows the equal
sign is a string, and that string is assigned to the variable. If we then wish
to use the value of the variable, we can not just refer the variable by name,
because if you just write the name, that name as a text would be the argument,
not the value hold in the variable. 

So to actually use the value of a variable, in a argument to a command, we use
the $ then follow that with the name of the variable. And depended on the
context, you sometimes need enclose to distinguish the name you are expanding
from the text around it.

So here for example, we are assigning the value 4 to a variable named foo, and
be clear that though its a number 4, the value being assigned here is a string
consisting of the character 4. And then if we invoke the echo command with a
argument of $foo, well, $foo gets expanded or replaced we could say by the
value of the variable, which is text simply consisting of a single character
the digit 4.

So what the echo command will actually print to stdout, is just a digit 4, not
$ not foo, that gets replaced with the value. In the next line we are going to
invoke a echo command, but now the argument is the expansion of foo followed
by a letter d, and this time we have to use this form with {}, otherwise the
shell will think we are trying to expand the variable named food, not foo. So
actually will get expand into nothing. It is actually possible to expand a
variable that does not exist, just expand to a empty string. 

So the next two lines should be evident, what's going on should be simply
assigning the string hello to a variable named bar, and then the next line we
are echoing out content of variable bar. So hello gets printed to stdout. 

You may recall earlier I mentioned the difference between single quotes and
double quotes. When we use single quotes in the shell, what gets quoted is the
text verbatim with no exceptions, double quotes in contrast make a few
exceptions, including the $ use for variable expansion. So here when we echo
$foo and enclosed in "", the expansion is performed, so it prints 4 to stdout,
which if we enclose the same in '', then what gets echoed is the verbatim text
$foo.

A variable in the shell can be mark as a environment variable(EV), which
effectively means the shell creates a matching EV, and then when you
subsequently assign new values to your variable the matching EV is given the
same value. This can be useful because when we fork our shell, or launch our
program from our shell, we may want these forks  and other programs to inherit
certain EV. For example the python interpretor expects to inherit a EV called
`python_path`, which is a list of directories the python interpretor then uses
to look for modules. So before we language the python interpretor for the
shell, we want to make sure the shell itself has a EV `python_path` with a
appropriate value.

Now by default when you create a shell variable, it is not a EV. We have to
mark it as such, with a built-in command export. So for example we create a
variable foo, assign the value 8, and then in the next line the export command
is then marking the variable foo as a EV. So it actually creates here a
matching EV called foo, with the current value of shell variable. In the next
line then, we assign a new value to the shell variable, this variable is
marked as a EV, so that matching EV is updated with this new value. 

As 
