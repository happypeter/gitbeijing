Recall that by convention in Unix processes expect to inherit two standard
file descriptors. FD 0, which we call stdin, for reading from terminal, and
FD1 called stdout for writing to that same terminal shell is no exception, so
both should have stdin and stdout, This means when our shells the processes
when you run the command, those commands expect to inherit stdin and stdout.

However while processes expect stdin and stdout be open to terminal, it is
sometime useful to give the process something other than the terminal for
stdin or stdout and this is called redirection. Assuming you start with a
program like the shell, that you has its stdin and stdout open to a terminal
and to the same terminal program is then going to respond another program by
forking itself, and then the fork executing a new program, well after the fork
but before the exec, you should close either stdin or stdout or both, and
theen open other files which will then take over the FD 0 and 1. Because when
you open a file in Unix, it's going to use the first available FD number, so
if you close, say FD0 stdin and then open another file immediately after you
know it's going to be open on FD 0, so what redirection allows is that when
the shell  off another program, that other program maybe a stdin a is still
reading from the terminal, but the stdout is writing to some other file, or
vice verse, maybe it's stdin write to that terminal, but reading a standard
input from some other file or alternatively maybe a stdin stdout have both
been redirected to some other file or finally maybe the stdin and stdout have
been redirected to separate files, so to give a very simple example of how
this might be useful, say we have a program which normally prints some
information to the terminal, that is writing stdout. Well if we redirect 
stdout, then the program instead of printing to the terminal will print to
some other file, write data to some other file, which you know might be
useful, because maybe you do not want to read the data right then, you want to
preserve it in a file, and read it later, or something along these lines.

Whatever your purpose, we can redirect to stdin and/or stdout with any
command in the shell using special character, the < and > . If in a command
you see an unquoted < , that < should be followed by a file path, and what
this tells shell to do is to redirect stdin by closing FD0 and then
immediately after opening specified file for reading. Effectively that file
assumes FD0 and the inheriting program is ... it reads from the stdin with
assumption that it is whatever file it suppose to be.

Likewise an unquoted > should be followed by a file path, and this tells the
shell when it executes the command to first close FD1(stdout) and immediately
then open the specified file for writing, so that it assumes FD1. Now those
redirections can actually be specified pretty much anywhere in the command.
You can put them even before the name of the command though that will be odd
thing to do. I personally prefer to put them after all the arguments, I find
it misleading and confusing if you place them anywhere else, because it seems
to apply they are somehow a kind of argument when they are not. These are not
arguments to the program, they are special trick the shell does before even
launches the program. 

So here for example we invoke the command foo and it has two arguments, first
a string, reading bar. And another string reading 35 and the command includes
redirection both for stdin and stdout. The order you write them does not
matter, but here I place the redirection stdin first, so this is redirecting
stdin to a file called note.txt, and it is redirecting stdout to the file
/dev/null, which we call a special file, when you write to it, the data you
write just get discarded.

This should explain now why stdin and stdout are separate FD. Because with
just one FD, both read and write from, then we could not redirect them
independently, by having separate FD, we can redirect them independently.

Redirection in Unix makes it possible another trick called piping. When in the
shell we separate two commands with the pipe character, which is usually found
on the same key as your \ key. It is easy to mistake for lower case L, but it
is nor it's a separate character, just a vertical bar. The shell with run
these two commands in parallel stdout to the file /dev/null, which we call a
special file, when you write to it, the data you write just get discarded.

This should explain now why stdin and stdout are separate FD. Because with
just one FD, both read and write from, then we could not redirect them
independently, by having separate FD, we can redirect them independently.

Redirection in Unix makes it possible another trick called piping. When in the
shell we separate two commands with the pipe character, which is usually found
on the same key as your \ key. It is easy to mistake for lower case L, but it
is nor it's a separate character, just a vertical bar. The shell with run
these two commands in parallel. It will run the same time and it will redirect
the stdout of the first command, which in turn is read as stdin by the 2nd
command. 

The reason we have to invoke a pipe is because processes ca not read and write
like files, processes simply can not do that, so we put a pipe in the middle.
