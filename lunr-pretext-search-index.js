var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sect-polynomials",
  "level": "1",
  "url": "sect-polynomials.html",
  "type": "Section",
  "number": "1.1",
  "title": "Polynomials",
  "body": " Polynomials   Recall that a polynomial is a function of the form:     where are constants and is called the leading coefficient . The degree of the polynomial is . Polynomials are quite important in numerical analysis.       Examples of polynomials include .    Functions that are not polynomials: .       The polynomials with small degrees are generally called more specific names. Here are the polynomials of degrees with 0, 1, 2 and 3.    degree  form  type        0     horizontal line    1     general line    2     quadratic    3     cubic      Power Functions  A power function has form for a nonnegative integer. These functions are the building blocks of polynomials. The graph of for :          The 3 functions for above are solid and shaped like cups opening up with the higher power growing faster with a flatter bottom inside the interval . The odd powers are dashed with a similar features in that the higher powers are steeper outside of the interval and flatter inside the interval.    Forms of Polynomials     Standard Form     This is a simple compact form of a polynomial and this can be useful for various types of theorems and it easy to see the degree and leading coefficient of the polynomial.    Factored Form:  The factored form of a polynomial can be written:     where the roots are and have multiplicity  respectively with from the standard form above, called the leading coefficient and the multiplicities satisfy: , where is the degree. Not all polynomials in standard form can be written in factored form, which assumes that all roots are real.  The factored form obviously gives you the roots directly, however, one can easily create a graph from this form as well. The behavior as , is the same as the power function with leading coefficient. That is it behaves like .  Additionally, the graph near each zero behaves like the multiplicity of zero. An example is given below in ???    Horner's Form  Lastly, if a polynomial is written in a nested form like     it is in Horner’s Form , which is generally an efficient way of evaluating the polynomial at a point, both in terms of efficiency of operations and in terms of rounding errors as will be seen in ????       Graphs of Polynomials  The graph of a polynomial is most easily understood in factored form (eq:poly:factored:form). The following can be determined directly from this form:     The -intercepts are the roots of the polynomial, .    The shape of the polynomial near is , where .    The end behavior of the graph (shape of the curve for ) is similar to the power function , where is the degree and is the leading coefficient.    The intervals of positive and negative values of the polynomial can be found by first understanding the sign of the power function for and , which depends on the sign of and if is even or odd. Once the sign of is known for large (in the positive or negative direction), we know that will only switch sign over a zero with odd multiplicity.     The following few examples shows how to both manipulate polynomials as well as pull out the important information.    Consider the polynomial .     List all real zeros of the polynomial and the multiplicity of each.    Determine the -intercepts and if the cross or just touch at each.    Find the power function that the polynomial resembles for large .    Find intervals where the graph is above or below the -axis.    Determine the graph of near each zero.    With all given information, plot with the graphs in #5.          The zeros are (mult. 1), (mult. 1) and mult. 2    The -intercepts cross at and just touch .    The power function is .    Since the power function for large is , left of and right of the function is positive. Recalling that the polynomial changes sign over roots of odd multiplicity however doesn’t over even multiplicity, one gets the following sign chart:            The graph of near each of the zeros will take on the form or    A graph of the polynomial and the three transformed power functions (as dashed curves):               The next example shows use of these same concepts to construct the graph.    Construct the graph of the polynomial:     This polynomial is in factored form. The roots are and with multiplicities 3, 2 and 1 respectively. Also, the degree of the polynomial is the sum of the multiplicities or 6. Notice that the term in front is , so the leading term is .  The intervals on which the polynomial is positive and negative is found the following way. Note that the leading term is , the far behavior of is the same as this so it is negative for . The polynomial will change sign over the roots of odd multiplicity or at and . Therefore the sign of the polynomial can be summarized in the following sign chart:          The graph of near each of the zeros will take on the form or     When     so near , the graph is     When  The multiplicity is 1 and the coefficient in front is     so near , the graph is     When  The multiplicity is 2 and the coefficient in front is       When  The multiplicity is 2 and the coefficient in front is     A graph of the polynomial and the three transformed power functions (as dashed curves):          and one can see the similarity between the power functions and the polynomial near each of the roots.      Find the standard form and Horner form of the polynomial .    The standard form is found by expanding all of the terms. This is a little painful, so a CAS like Matlab, Maple or Mathematica is often helpful.     To find the Horner form, we successive factor out an in a nested way:     As we will see later in ?????, the Horner form also decreases round off errors and shorten the number of operations needed to evaluate the polynomial.    Also as we will see in section sect:optimal:pts, some polynomials have properties that seem to be nice may not be so nice. For example a polynomial with equally spaced roots have a nice form, but the local extrema get very large. The following example is a polynomial with equally-spaced roots.    A Wilkinson polynomial is a polynomial of some degree (an integer) with the following property: the polynomial as roots at , each of which has multiplicity 1. Write down the Wilkinson polynomial of degree 5.           Find a polynomial with the following roots and multiplicity:    Roots  1  -1  2    Multiplicity  2  1  3    and satisfies .    First, we write a general polynomial that satisfies the roots property with appropriate multiplicity:     and then find using ,     so and the polynomial is:       In Section ????, we will cover how to find a polynomial that passes through a given set of points. The next example is a fundamental building block of such polynomials called a Lagrange polynomial.    Find the simplest polynomial that has the property that , and .    Since there are 3 points that it must satisfy, unless there is a special relationship between and , we will probably need a quadratic. We know two of the zeros of the polynomial, so a form is:     and then we use the third point to find      or     therefore the polynomial is:        "
},
{
  "id": "sect-polynomials-2-4",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-2-4",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "     Examples of polynomials include .    Functions that are not polynomials: .      "
},
{
  "id": "fig-xfewfe",
  "level": "2",
  "url": "sect-polynomials.html#fig-xfewfe",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "       "
},
{
  "id": "sect-polynomials-5-5",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-5-5",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Consider the polynomial .     List all real zeros of the polynomial and the multiplicity of each.    Determine the -intercepts and if the cross or just touch at each.    Find the power function that the polynomial resembles for large .    Find intervals where the graph is above or below the -axis.    Determine the graph of near each zero.    With all given information, plot with the graphs in #5.          The zeros are (mult. 1), (mult. 1) and mult. 2    The -intercepts cross at and just touch .    The power function is .    Since the power function for large is , left of and right of the function is positive. Recalling that the polynomial changes sign over roots of odd multiplicity however doesn’t over even multiplicity, one gets the following sign chart:            The graph of near each of the zeros will take on the form or    A graph of the polynomial and the three transformed power functions (as dashed curves):              "
},
{
  "id": "sect-polynomials-5-7",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-5-7",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Construct the graph of the polynomial:     This polynomial is in factored form. The roots are and with multiplicities 3, 2 and 1 respectively. Also, the degree of the polynomial is the sum of the multiplicities or 6. Notice that the term in front is , so the leading term is .  The intervals on which the polynomial is positive and negative is found the following way. Note that the leading term is , the far behavior of is the same as this so it is negative for . The polynomial will change sign over the roots of odd multiplicity or at and . Therefore the sign of the polynomial can be summarized in the following sign chart:          The graph of near each of the zeros will take on the form or     When     so near , the graph is     When  The multiplicity is 1 and the coefficient in front is     so near , the graph is     When  The multiplicity is 2 and the coefficient in front is       When  The multiplicity is 2 and the coefficient in front is     A graph of the polynomial and the three transformed power functions (as dashed curves):          and one can see the similarity between the power functions and the polynomial near each of the roots.   "
},
{
  "id": "sect-polynomials-5-8",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-5-8",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Find the standard form and Horner form of the polynomial .    The standard form is found by expanding all of the terms. This is a little painful, so a CAS like Matlab, Maple or Mathematica is often helpful.     To find the Horner form, we successive factor out an in a nested way:     As we will see later in ?????, the Horner form also decreases round off errors and shorten the number of operations needed to evaluate the polynomial.   "
},
{
  "id": "sect-polynomials-5-10",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-5-10",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  A Wilkinson polynomial is a polynomial of some degree (an integer) with the following property: the polynomial as roots at , each of which has multiplicity 1. Write down the Wilkinson polynomial of degree 5.        "
},
{
  "id": "sect-polynomials-5-11",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-5-11",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Find a polynomial with the following roots and multiplicity:    Roots  1  -1  2    Multiplicity  2  1  3    and satisfies .    First, we write a general polynomial that satisfies the roots property with appropriate multiplicity:     and then find using ,     so and the polynomial is:      "
},
{
  "id": "sect-polynomials-5-13",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-5-13",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Find the simplest polynomial that has the property that , and .    Since there are 3 points that it must satisfy, unless there is a special relationship between and , we will probably need a quadratic. We know two of the zeros of the polynomial, so a form is:     and then we use the third point to find      or     therefore the polynomial is:      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
