# Notes

*You can write notes for each chapter here*.

## Chapter 1
Chapter 1 - Values, types & operators


Values zijn aparte chunks van bits, die samen stukjes informatie representeren.
Ondanks dat values allemaal uit bits bestaan kunnen verschillende values verschillende rollen spelen. Zo zijn er stukjes text, functies etc.

Om een value aan te maken hoef je alleen de naam op te roepen. Values worden natuurlijk ergens opgeslagen, maar dit is geen probleem zolang je ze niet allemaal tegelijkertijd aanroept. Als je een value niet meer gebruikt verdwijnt deze dan ook.

Nummers
Values van het type nummers worden als volgt gedefinieerd: 13
Omdat JS 64 bit is kan het 2^64 nummers gebruiken. Dat is 18 quintillion.
Niet al deze nummers zijn positief of heel, daarom komt het uiteindelijk op 9 quadrillion.

De volgende notatie is ook mogelijk: 9.81 of 2.998e8, wat uitkomt op 299,800,000.

Nummers zoals pi kunnen precisie verliezen aangezien deze niet met een finiet aantal decimale getallen. Daarom behandel je fractional digital numbers als schattingen en niet als precieze waardes.

Javascript kan ook rekenen, dat noemen we arithmetic. + - / * etc kan JS gebruiken om calculaties te maken. Deze symbolen heten operators.

LET OP: % representeerd de remainder of modulo. Zo is 314 % 100 = 14.

/ * % komen eerst + -  komen laatst. Haakjes kunnen toegevoegd worden om dit te omzeilen.

Speciale nummers zijn Infinity, -Infinity en NaN(Not a number). NaN komt wanneer een nummerieke operatie geen relevante uitkomst biedt(0 / 0 of infinity - infinity).

Strings
Tekst wordt in quotes gedefinieerd. “Zo definieer je tekst”.
“ ‘ ` Kunnen allemaal gebruikt worden om een string te definiëren, zolang de opener en closer overeenkomen.
\ Kan gebruikt worden om speciale tekens te escapen. Dit geeft aan dat een teken een speciale betekenis heeft.
\n kan gebruikt worden om een newline aan te geven, \t kan gebruikt worden om een tab aan te geven. Twee \\ vormen een \ in je string en omzeilen escaping.

Unicode zorgt dat elke karakter een bit code heeft voor de computer.

Wanneer een string in backticks is gequote is dit mogelijk `half of 100 is ${100/2}`.
Deze met backtick gedefinieerde strings heten template literals.

Unary operators
Sommige operators zijn geen tekens maar woorden, zoals typeof, wat een string produceert met de type van de gegeven waarde.

Binary operators nemen twee waardes, unary operators nemen een waarde.

Boolean values
Geeft True of false wanneer een waarde gechecked wordt.

< > <= == === != !! kunnen allemaal als checks gebruikt worden.

Logical operators
&& staat voor and, geeft true wanneer beide checks true zijn.
|| staat voor or, geeft true wanneer een van de checks true is.
! staat voor not, invert de input. !true = false.
? Heeft 3 inputs.
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
? kiest wanneer true het 1e getal, wanneer false het 2e getal.
De ? heet de conditional operator, of ternary operator.

Empty values
Null en undefined geven de afwezigheid van nuttige informatie aan. Ze zijn zelf values, maar dragen geen informatie.

Automatic type conversion
Type coercion verandert stilletjes “verkeerde” value types naar de goede.
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

=== Kan gebruikt worden om de type values ook te vergelijken, i.p.v. alleen de value vergelijking van ==. Ook !== kan gebruikt worden.

Short-circuiting of logical operators
Wanneer een waarde links van een || niet omgezet kan worden in true output de || de rechter waarde.

‘’The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true. So 0 || -1 produces -1, and "" || "!?" yields "!?".’’

Bij && is het andersom, wanneer de linker waarde naar false wordt omgezet returned het de linker waarde.


## Chapter 2

Chapter 2
Een stukje code die een waarde produceert heet een expression.
Expressions vormen JavaScript statements.

Bindings
Om informatie op te slaan gebruiken we binding, of variable.

Let caught = 5 * 5;

Deze variables kunnen later hergebruikt worden:

Let ten = 10;
console.log(ten * ten);
// 100

Variables kunnen altijd veranderd worden.

Binding names
Binding names mogen nooit beginnen met cijfers en mogen alleen de speciale tekens $ en _ bevatten. Ook mogen binding names geen JS keywords bevatten.

The environment
De collectie van bindings en hun values heten the environment.
Dit is op startup niet leeg, maar bevat bindings van de taal zelf.

Functions
Een functie uitvoeren heeft invoking, calling of applying.
Een functie aanroepen doe je door () toe te voegen na de expressie die je functie bevat.

The console log function
Console.log laat de output van je code in je JavaScript console in je browser tonen.


## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11
