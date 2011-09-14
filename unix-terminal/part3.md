Recall that by convention in Unix processes expect to inherit two standard
file descriptors. FD 0, which we call stdin, for reading from terminal, and
FD1 called stdout for writing to that same terminal shell is no execption, so
both should have stdin and stdout, This means when our shells the processes
when you run the command, those conmmands expect to inherit stdin and stdout.

However while processes expect stdin and stdout be open to terminal, it is
sometime useful to give the process something other than the terminal for
stdin or stdout and this is called redirection. Asssuming you start with a
program like the shell, that you has its stdin and stdout open to a terminal
and to the same terminal program is then going to respond another program by
forking itself, and then the fork execting a newprogram, wehll after the fork
but before the exec, you should close either stdin or stdout or both, and
theen open other files which will then take over the FD 0 and 1. Because when
you open a file in Unix, it's going to use the first available FD number, so
if you close, say FD0 stdin and then open another file immediately after you
know it's going to be open on FD 0, so what redirection allows is that when
the shell  off another program, tha tother program maybe a stdin a is still
reading from the terminal, but the stdout is writing to some other file, or
vice verse, maybe it's stdin write to that terminal, but reading a standard
input from some other file or alternatively maybe a stdin stdout have both
been redirected to some other file or finally maybe the stdin and stdout have
been redirected to separate files, so to give a very simple example of how
this might be useful, say we have a program which noramlly prints some
information to the terminal, that is writing stdout..
