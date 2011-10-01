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
ifoo echo bar, so the lession here again is when you do wish to nest command
substitutions, do not use back ticks, that will end up producing result you
probably do not intend.


Another useful kind of substitution is called arithmetic substitution. In
arithmetic substitution  $(())s the value of the  1st argument to the function. So in the next line when we
invoke this function, the first argument /bin, and the second is /home. So
what this function will do is first change the current working directory to
/home, and then list the contents of the /bin directory.

When we invoke a function, the exit status of that invocation is normally the
exit status of the last command executed within the function. With the
built-in return function however, we can explicitly return a value from a
function and also cause execution to leave a function early. So it is just
like in python or javascript, a return statement may be encountered before the
very end of the function. But when encountered, a return casue the execution to leave
the function. 

This is a example function does nothing except invoke return built-in to
explicitly return the value 3. Notice in the last line however we are using
special variable expansion $?, which expands to the exit status of the
previously executed command. So here we invoke foo, and that return the value
3, so in the next line expansion $?, expands to a value 3.

So far we've discussed variable expansion, but there are a number of other
kinds of expansion, including what is called brace expansion. A argument that
uses brace expansion contains a pair of curly braces, not preceded by a $,
because if the $ were there, it will be a variable expansion, not a brace
expansion. Inside of these curly braces, you have a comma separated list, and
before the braces you optionally could have preamble and afterwards
postscript.

So consider this example, say we will use argument, reads foo{apple, banana}bar, what this expands into is fooapplebar foobananabar.
So what happens in the brace expansion is that each item separated by commas
in the curly braces, that gets surrounded by the preamble and postscript, and
the values produced by this expansion are separated by spaces. So the second
example here, as the comma separated list 35, 14, hi with a postscript bar and
notice has no preamble. So implicitly the preamble is just a empty string, so
what we end up with 3 items: 35bar 14bar hibar. 

Now those are just simple example of brace expansion. There are a few other
things you can do which I won't get into. 

But the question is when would this ever be useful?

And the answer is with some commands, you end up writing a string of
arguments, overall very similar, but for small differences. And so with brace
expansion we can express that in a more convenient way. 

Like for example say two arguments are file paths, that are exactly the same,
but for one change, so here we write /usr/local/.../bash/ and then in curly
braces, comma separated old and new. What we end up with are two separate
arguments, both the same except for the last component of the path.

Another kind expansion is called tilde expansion, I mentioned in passing, the
tilde in the shell is used as short hand for your home directory. So what
actually happens is when the shell see a tilde in a argument to a command, it
expands that tilde into whatever you home directory path is. So on my system
for example, my home directory is /home/brain, so tilde will expand to
/home/brain. 

If I were to write a argument ~/foo, again the shell will expand that tilde
into /home/brain, so it end up with /home/brain/foo.

The shell also has a powerful feature called command substitution. The idea
here is that a command is invoked and whatever the command writes to stdout,
that data get inserted where the command substitution is placed. And there two
syntaxes for this, the first encloses the command with a pair of parentheses
preceded by a $, the second encloses the command in back ticks, back tick is
the character on the same key as tilde on American keyboards.

So for example if I write $(echo foo), the echo command here writes foo to
stdout, so the text is what get inserted in place of this command
substitution, the output get substituted in place of the command. And
alternatively we can get the same effect by writing the same thing expect
enclosing command in back ticks, the downside of the back tick form, is
because you use same character as start delimiter and end delimiter. That
means you can not nest command substitutions in the syntax. Any time you wish
to nest command substitutions, you have to use $() syntax.

So here for example, we are attempting nested command substitutions, and the
top example we are properly using $() syntax, so what actually happens here is
first the interior substitution command runs echo bar, so first bar is
substituted in place of that command substitution, and the outer command
substitution is performed invoking echo with the arguments foo and bar, so foo
bar is inserted in place of that command substitution.

When we try this with back ticks, we don't get the same effect, because what's
really going on here is that the first command substitution runs from the
first back tick character to the second one, the second back tick proceeding
the second echo, and then at the end of the line we have another pair of back
ticks, indicating a command substitution with no command inside, which
effectively just return a null string.

In fact this means the second echo is not really a command, it is just
argument text, so what happens here is the first command substitution is the
command echo with the arguments foo, so the text foo get substituted in its
place, leaving us with foo echo bar, so the lesson here again is when you do
wish to nest command substitutions, do not use back ticks, that will end up
producing result you probably do not intend.


Another useful kind of substitution is called arithmetic substitution. A 
arithmetic substitution is written with $(()) in which we place a arithmetic
expression which gets evaluated, and the result of that evaluation is what get
substituted as the text. 

So in the first example here, the arithmetic substitution has the expression
3+5, the shell will evaluates that and return the text 8. In the second
example with the expression first as 3+5 together, getting us 8 and that gets multiplied by two
getting us 16, so the text returned is 16. 

Very handily we can do variable substitutions inside arithmetic substitutions.
So here for example, we assign the value 7 to the variable foo, and then in
the subsequent arithmetic substitution, we can expand the variable too get its
current value, which is then here added to 3, result in the text 10.

One more kind expansion is called filename expansion. If in a argument you see
this special characters `*` or `?`, or if you see both. That argument is
expanded into the matching file or directory names, where the `*`s get to
match a run of zero or more characters, while the `?` is used to match a
single character, so for example, if I write as a argument `foo*bar`the shell
will look at in its CWD for matches, and any file or directory which matches
that pattern gets included in this expansion. So imagine say, we have a file
called foo3bar well, that matches, or foosdfsdfbar that also matches, because the
`*` will match any number of characters. And lastly foobar will match because
the `*` will match the absence of any character.

In the same directory, however if you write foo?bar, that will only match
against foo3bar, because foosdfsdfbar that is multiple characters in between
the foo and bar, and foobar will not match, because there has to be 1
character to match ?. You can not have the absence of any character.

As last example illustrates, the `*` does not have to go in the middle of
text, it can also goes in the front or the end. So here `foo*` will match all
the same things as `foo*bar`, except that will also match fooak. It
effectively matches anything that begins with foo.

So again in all of the examples the shell is searching for filenames
directory names in the CWD. But if you were to precede the argument with a /,
then the shell will try to match the argument against Absolute path.

So that has covered most if not all of the mechanisms of the expansion and
substitution of the shell offers. I allied some features that are potentially
useful, are really quite ugly in details, so kind of headache to think about.

One last thing though that can be useful to know is the order in which the
shell will perform the expansions and substitutions. The general order is it
first does brace expansions, then it will do tilde expansions, and third it will
do the same level of precedence: variable expansions, arithmetic expansions,
and command substitutions. So really what that means is that it matters which
inside which , which is the most interior because just like expressions, they
are valued inside out.  And then lastly, other stuff, when the shell do file
expansions. So keep this order in mind can help you understand command makes
complicated use of these substitutions. 

Lastly there is a question of will the shell do expansion and substitutions
upon the result of my expansions and substitutions. So the question is then,
does the shell do file expansion on the result of variable expansion. Also you
will find there are quite complicated rules about certain context in which
expansions and substitutions are not performed, like they otherwise normally
are. To be perfectly honest, I am not totally clear with all those rules
myself, and because of all these complications of expansions and
substitutions, that I consider the shell is a really ugly language. 

In any case, if you wish to read on these stuff, the place to look is the gnu
bash manual,
