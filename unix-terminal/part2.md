#SLIDE 1(00:00-02:12)
You should be absolutely clear at this point that a terminal is just a dumb
device for displaying text characters on the screen, and for sending text
characters from the keyboard to a program that wishes to read them.  Without
programs reading from terminal and writing to it. Terminals are pointless.

What we call a shell in Unix is a program which reads from a terminal and then
interpret what user entered as a command and executes that command. 

Effectively a shell is an interpreter for a programming language, it is just
the expectation of the shell  that the user typing the lines of code one by
one, and each time they enter a line of code the shell then immediately
executes it. So we can see a shell is like an interactive programming
language, The user types a command, and then the shell immediately executes
that command.

For many years the most widely  used shell on Unix systems was known just as
sh, for shell, but more formally known as the B shell, because it was created
by a guy named Steven B. For the most part, all the other shells have been
used at one point or another that are listed here are really just variations
on the original B shell. Most of them takes the core of B shell and just takes
in the additional features.

Perhaps the one exception here is the csh which changes a few things about the
syntax of the  of the original B shell, as well as adding additional features.
The Ksh for example is so called because it is created by a guy named David
Korn, was created a few years after the B shell and mostly adds things rather
than changing anything about the core shell syntax and features. Of all the
shells listed here, the one you need to become most familiar with and the one
we are going to focus on is Bash( aka the B again Shell)

Bash was created in the late 80s by a GUN project and so it got adapted as the
effectively default  shell in Linux systems.  So in fact, most of the time you
open up a terminal window on a Linux system it will  most likely by default
have the bash shell running in it.

Again bash shell is pretty much just the a extension of the original B shell.
I do not believe there is actually anything that they changed about the
original shell, they just added more features. 

#SLIDE 2(02:12-04:40)
So say I boot up my Ubuntu system and the X window server then starts and
finally my whole graphical desktop there is loaded and ready to go. If I then
open a terminal program I will get this terminal emulator window, and in it is
running the bash shell because that is the default on ubuntu systems.  And as
you see here, what I am presented with is first a prompt, and the prompt
displays my user name followed by the name of the system, which here is just
happens to be ubuntu I suppose, that is then followed by colon after which is
listed the path of the current working directory of the shell. Recall that
every process in Unix has associated with it a current working directory is
sometimes called the process working directory. 

In this case as listed as tilde, because in Bash syntax and sh syntax, tilde
is used as special signifier, a special shorthand for my home directory , so
really what should be printed here is /home/brian and this is just a shorthand
. We will talk more about the special meaning of tilde a bit later. And in
this case so after listing the current working directory, there is a $ sign
which simply denotes the end of the prompt. 

And then after the prompt there is a space and my text cursor where if I start
typing, that is where my text is going to start appearing. Because when the
shell is waiting for you to enter command, it puts the terminal into the
echoin mode. 

So now I can type a command and as I type it the characters will appear in the
terminal, and once I hit enter the shell usually interprets the newline
character as the end of a command. So it will then interpret that command and
execute it. 

Before getting in to the details of bash syntax and semantics, also remark
here that shell languages have what I like to call a command based syntax and
semantics, in contrast to the expression based syntax languages we've seen in
languages like Java script python. This stems from a very different design
goal. Shells are mainly about not writing whole bunch of code that runs with
the shell, but writing code that simply launches other programs.

So while it is perfectly possible in say, python to launch other programs, it
is not made specially convenient, because python is mainly about writing code
to run directly in the python interpreter, not to run as separate processes.
Whereas in shell, mainly what is about is running other  programs. 

#SLIDE 3(04:40-05:00)
So this difference of purpose is what explain the reason  behind the syntax
for the basic kind of the command what I call the process command.

A process command is written by specifying the name of the program, and then
after one or more spaces,
we will put  a list of arguments. And the arguments as we will see are not separated
by commas, they are just separated by spaces. 
#SLIDE 4(05:00-05:26)
So for example a process command might
read ls -la bin. And what this is is first the program name ls and followed by
two arguments the first -ld , the second bin.what is going on with these
arguments we are talking about in a moment, but looking first at the program name
if this is the name of some program, some  executable file somewhere on the
system how does the shell know were to find it? 

#SLIDE 5(05:26-10:42)
Well actually there are
there different cases. When you see a program name with no slashes in it, then
the shell will search executable file of that name in one of the directories
listed in what is called the PATH, the path is simply a environment variable
in the shell process. 

So for example , this is what the path variable looks like in the shell on my system. It
has a list of directories separated by colons. First /usr/sbin then
/usr/local/bin/ then /usr/sbin/and /usr/bi/ and /sbin and /bin/.

These are
the directories in the my path. So in my shell when I run the command foo,the
shell will first look for a executable  called foo in each one of the directory,
starting with the one listed first, going left to right. And it goes to the first match it
finds. Assuming it did not find any match then the shell reports a error,
saying
there is no such program called foo.  So that's the first case when I do not
have any of the /es in the
name of the program. 

when the name starts with a / then the shell interprets this as a absolute
path to a executable
file. So in this case /bin/foo, the shell will look for that file and if there
is not that program of that name the shell reports a error saying hey there is
no such program as /bin/foo

The last possibility is that there is / in the name but not at the start. This is then
interpreted by the shell as a relative path name, so it  will look for that path relative
from the process working directory, the current working directory of the shell
itself. And this is one reason why the shell will display the current
working directory. Because it is something you often need to know. So for
example assuming the process' working directory is currently in my home
directory /home/brian/ this will look for the file /home/brian/bin/foo and of
course if there is no such executable file then the shell will give you a
error message.

One thing that almost always tricks newbies is that when they type say foo, to
look for foo in the current directory rather than just in the directories of
the PATH but this is not the case. As just explained, the shell only looks at
the current working directory when there is a / somewhere in the middle of the
name.  The trick than is run foo in the current directory is not to write just
foo, but to write ./foo 

What is going on here is that in a Unix system, every directories always
contains an entry called dot which refers to that directory itself. This is a
special entry that is added to every directory that we create. So when we
write ./foo, that is a relative path, that is  want just foo.  It is just in
this case will trick the shell to looking in the process working directory
before looking at the path. 


We mentioned in Unix directories also always contain a directory called ..
which resolves to the containing directory.  So for example a path that reads
/home/brian/.. that actually resolves to the same things as /home. Like the
dot entry the .. entry is sometimes useful when we write relative path names. 

In any case getting back to our example process command that begins ls,
you can see the program name here has no /es in it. So the shell is going to
look at it in the path. The motivation behind the path mechanism is
that there are a number of programs that in the system that we want the
convenience to be able to run without having to switch to the directories or
having to write out their full path names. So we place these programs in a
number of
standard directories , like /bin or /sbin/ or alternatively we add
the directory in which the program is contained to our path, that way we can execute them
without having to write out their full name. 

In this case. ls is a standard Unix program, sometimes called the list program,
because what is does is to list the contents of a directory it prints out
on your terminal, prints out the contents of some directory. And on most Unix
systems ls is going to found is the /bin directory, cause /bin is a
standard directory for general programs, general common programs. 

The /sbin
directory is  so named because it is for programs with superuser
privileges, hence s, and so you place in there the programs which do things that
have to do with system administration, generally. 

As for the other directories in the path, the /usr directories, we will
talk more about the standard directories layout in  Unix system in a
supplementary unit. 


In any case that explains how a shell locates a program, well what about these
arguments? And how exactly does shell then executes the program, well anytime
in Unix, you have a program executing another program, what is going to
involve is first a fork system call and then a child process that gets created
invokes the exec to actually load the program and run it. 

#SLIDE 6(10:42-
So first off the shell invokes the fork system call, and after the fork the
parent process involves the wait system call to wait for the child process to
complete. The child process meanwhile, that has to call the exec to actually


run the ls program, because until calls the exec 



in this exec all, one of the arguments if of ourse file, but then also thhere is another argument to exec whereby passing called the program arguments in this case its two strings the first is reaind -ls, the second a string reading bin. 

we have previsously discussed program arguments, so again looking at pur model of the memeory layout of the porcess what the exec ssytem call does is copy the program argumnet s to somewhere in the heap of the  process and then in first stack frame it places the address pointing to these arguments heap, and also on stack exac places the count of  arguments.
you might think you should leave a indicator of the arguments but you does not have to, because these arguments always terminated by a nol byte, so as long as a program gets a address pointing to the start of the arguments, and count of how amy they are, the program can correctly read all of the argumnets passed to it. 

So now we ehn create a executable to run on the Unix system, we are execpted to oberve th econvention that the stack frame ids goin go contain the address of arguments some where on heap and also a count of the number of the arguments. So for exemple when the python interpreter runs on Unix, one of the first things it does is looks for a address the argument count on the stack, and then go and find the arguments, and put s thenm on a python list, and the way you can actually these arguments in a python program in first you imort these sys module, and in the sys module a member called .argv, v here stands for vectory, meaning essentially list. sys.argv is the list of arguments here expressed as python strings.

whell this is the case arguments  could be pretty much of dedi you want, text data by any data whatever we can eventually thing them as Ascii strings. So when we involke ls with tow arguments, the first argument is a Ascii string reading -la, the second was a Ascii string reading bin.

Finally last thign about program arguments is that what they mean is entirely up to the program to which we pass them. In this perticular case, ls interpertes -la as a option of how to display the contentof the directory, and the second argument here bin is  intereted as the bane of the dirctory which contents we willl to list. Nothing baout the shell have to govern this, it si entirely up to the ls conmmanda itself, interpretes these grgmtns. So I have to actually go t ad read the mannual and ls peofram.

As you see most command and programs on Unix follow na number of convention in which how to a=pass argunets to them for example the ususal convention is that grgunets beginning with a - are specify some other kind of optioj . Ususally called flags. So -la here is a flag to the ls program, specifying some option. But again that is just a convention, so really you have to just brea sown ans reasd the manual for any progrram you wish to use on the commandline. 

In bash sytax ceartain characters are given specail meaning and eventually will num all these special of all these specail meanings. In some contexts, you will want ot disable the special meaning so that a special character, that does not simplify the specail meaninga. For this puopose, we do what we called quoting. 

First off the quote a siggal character, you simply        preceed it with a  sigal back slash,and that character come backslash for special characterdoe not make the specail character itself. With out any specail meaning.

alternatively you can use a pair of singal quote marks, which will quote all the character encose to them, so effectively every character betwwen single quote marks signifies simply itself. 

Similiarly yo can usedouble quote marks to quote characrers execpte the do not colse any enclosed dollar sgins and backslashes, marks astrick and . understand you nught use calls the ls command previously.

In the top esample here, when we preed the space with a backslash, we are removing the special meaning that spaces normally have, which is to separate arguments, so effectively what is will do is envokin  the ls program , but we are olnly passing one argumwwnt, a string that reads  -ls bin.

In the second example here what we enclose the arguents in a pair of signal code, that back slash now no longer has specail meaning, so this is invoking the ls program with a single arguments that reads -la / bin

in the third example here, the back slash is now proceeding a new line character, a newline of its normal significance, which i is to denote the end of the command. So effectively what we have done is actaually  the command from one line tinto two. So you actually see this trick a lot in shelll scripts, you will see lines that is split from on line to multiple lines, by simply ending alll of hem with a back slash 

In the fourth example, backs slash is preceeding the $ sign, so the dollar sign which is noramlly character is now been quoted, for no special significance, The backslash and dollar sign together signify a single dollar sign character which is not given special by the shell and simply pass as the argumnet to foo. 

This ihis last example howerevr, within double quote marks, inside double quote marks, the dollar sign is one of the special execptions, on eof the special characters contains special meaning, made a chacre here.
