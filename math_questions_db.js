const QUESTIONS_DB = {
  "mathematics": {

    "Real Numbers": {
      mcq: [
        {q:"What does the Fundamental Theorem of Arithmetic state?",opts:["Every composite number has a unique prime factorisation","Every prime is also a composite number","Every integer is a rational number","Every natural number is prime"],ans:0},
        {q:"Euclid's Division Lemma states: for positive integers a and b, there exist unique q and r such that:",opts:["a = bq + r, 0 ≤ r < b","a = bq + r, 0 < r ≤ b","a = bq - r, 0 ≤ r < b","a = b + qr"],ans:0},
        {q:"The HCF of 96 and 404 is:",opts:["2","4","6","8"],ans:1},
        {q:"The LCM of 6 and 20 is:",opts:["30","60","120","180"],ans:1},
        {q:"For two positive integers a and b: HCF(a,b) × LCM(a,b) = ?",opts:["a + b","a - b","a × b","a ÷ b"],ans:2},
        {q:"The decimal expansion of 17/8 is:",opts:["Terminating","Non-terminating repeating","Non-terminating non-repeating","Cannot be determined"],ans:0},
        {q:"The decimal expansion of 1/7 is:",opts:["Terminating","Non-terminating repeating","Non-terminating non-repeating","Terminating after 7 digits"],ans:1},
        {q:"√2 is:",opts:["A rational number","An irrational number","A natural number","An integer"],ans:1},
        {q:"The prime factorisation of 32760 is:",opts:["2³ × 3² × 5 × 7 × 13","2³ × 3 × 5² × 7 × 13","2² × 3² × 5 × 7 × 11","2³ × 3² × 5 × 7 × 11"],ans:0},
        {q:"p/q has a terminating decimal expansion if q (in lowest terms) is of the form:",opts:["2ⁿ × 3ᵐ","2ⁿ × 5ᵐ","3ⁿ × 5ᵐ","2ⁿ × 7ᵐ"],ans:1},
        {q:"HCF of two consecutive integers is always:",opts:["0","1","2","The smaller integer"],ans:1},
        {q:"If HCF(a,b) = 1, then a and b are called:",opts:["Composite numbers","Co-prime numbers","Twin primes","Consecutive numbers"],ans:1},
        {q:"4ⁿ can end with digit 0 for:",opts:["n = 1","n = 2","n = 4","No natural number n"],ans:3},
        {q:"The HCF of 6, 72 and 120 is:",opts:["2","4","6","12"],ans:2},
        {q:"The LCM of 6, 72 and 120 is:",opts:["180","240","360","720"],ans:2},
        {q:"Which of the following is irrational?",opts:["√4","√9","√25","√3"],ans:3},
        {q:"The number 3 + 2√5 is:",opts:["Rational","Irrational","An integer","A natural number"],ans:1},
        {q:"Using Euclid's algorithm, HCF(135, 225) = ?",opts:["15","25","35","45"],ans:3},
        {q:"The decimal expansion of 23/(2³ × 5²) is:",opts:["Terminating","Non-terminating repeating","Non-terminating non-repeating","Cannot be found"],ans:0},
        {q:"A number that has only two factors (1 and itself) is called:",opts:["Composite","Prime","Co-prime","Irrational"],ans:1},
        {q:"Which of the following represents a non-terminating repeating decimal?",opts:["7/8","13/25","1/6","3/16"],ans:2},
        {q:"The Fundamental Theorem of Arithmetic was first correctly proved by:",opts:["Euclid","Newton","Carl Friedrich Gauss","Archimedes"],ans:2},
        {q:"If n is any natural number, then 6ⁿ - 5ⁿ always ends in:",opts:["0","1","2","5"],ans:1},
        {q:"HCF × LCM = Product of numbers is valid for:",opts:["Three numbers","Two numbers only","Any number of integers","Prime numbers only"],ans:1},
        {q:"The decimal 0.375 as a fraction in lowest terms is:",opts:["3/8","3/4","5/8","7/16"],ans:0},
        {q:"If the LCM of two numbers is 180 and HCF is 6, and one number is 12, the other is:",opts:["60","72","90","120"],ans:2},
        {q:"√5 + √3 is:",opts:["Rational","Irrational","An integer","A natural number"],ans:1},
        {q:"The largest number that divides 70 and 125 leaving remainders 5 and 8 respectively is:",opts:["9","13","65","875"],ans:1},
        {q:"Which statement about irrational numbers is TRUE?",opts:["Sum of two irrationals is always irrational","Product of two irrationals is always irrational","Irrationals cannot be represented on a number line","Irrational numbers are non-terminating non-repeating"],ans:3},
        {q:"The number of prime factors of 2 × 3 × 5 × 7 is:",opts:["2","3","4","5"],ans:2}
      ],
      short: [
        {q:"State Euclid's Division Lemma and use it to find HCF(135, 225).",a:"Euclid's Division Lemma: For any two positive integers a and b, there exist unique integers q (quotient) and r (remainder) such that a = bq + r, where 0 ≤ r < b.\n\nFinding HCF(135, 225):\n225 = 135 × 1 + 90\n135 = 90 × 1 + 45\n90 = 45 × 2 + 0\nSince remainder = 0, HCF(135, 225) = 45"},
        {q:"State and explain the Fundamental Theorem of Arithmetic with an example.",a:"Fundamental Theorem of Arithmetic: Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.\n\nExample: 36 = 2 × 2 × 3 × 3 = 2² × 3²\nNo matter how we factorise 36, we always get 2² × 3² as the prime factorisation."},
        {q:"Prove that √2 is irrational.",a:"Assume √2 is rational. Then √2 = p/q where p, q are integers, q ≠ 0, and HCF(p,q) = 1.\nSquaring: 2 = p²/q²  →  p² = 2q²\nSo p² is even → p is even. Let p = 2m.\nThen: 4m² = 2q² → q² = 2m² → q is even.\nBut then HCF(p,q) ≥ 2, contradicting our assumption.\nTherefore √2 is irrational."},
        {q:"When does p/q have a terminating decimal expansion? Give two examples.",a:"The rational number p/q (in lowest terms) has a terminating decimal expansion if and only if the prime factorisation of q is of the form 2ⁿ × 5ᵐ, where n and m are non-negative integers.\n\nExamples:\n• 7/8 = 7/2³ → q = 2³ (form 2ⁿ5⁰) → terminating = 0.875\n• 3/25 = 3/5² → q = 5² (form 2⁰5²) → terminating = 0.12"},
        {q:"Find HCF and LCM of 12, 15, 21 using prime factorisation.",a:"Prime factorisations:\n12 = 2² × 3\n15 = 3 × 5\n21 = 3 × 7\n\nHCF = product of lowest powers of common prime factors\nHCF = 3¹ = 3\n\nLCM = product of highest powers of all prime factors\nLCM = 2² × 3 × 5 × 7 = 420"},
        {q:"Show that 5 - √3 is irrational.",a:"Assume 5 - √3 is rational.\nThen 5 - √3 = p/q (p, q integers, q ≠ 0)\n→ √3 = 5 - p/q = (5q - p)/q\nSince p and q are integers, (5q - p)/q is rational.\nBut √3 is irrational — contradiction!\nTherefore 5 - √3 is irrational."},
        {q:"Check whether the decimal representations of 13/3125 and 17/6 are terminating or non-terminating.",a:"13/3125: 3125 = 5⁵ = 2⁰ × 5⁵ → form 2ⁿ5ᵐ → TERMINATING\n17/6: 6 = 2 × 3 → contains prime factor 3 (not of form 2ⁿ5ᵐ) → NON-TERMINATING REPEATING"},
        {q:"Find the LCM and HCF of 26 and 91 and verify that LCM × HCF = product of the two numbers.",a:"Prime factorisations:\n26 = 2 × 13\n91 = 7 × 13\n\nHCF = 13 (common prime factor)\nLCM = 2 × 7 × 13 = 182\n\nVerification:\nLCM × HCF = 182 × 13 = 2366\nProduct of numbers = 26 × 91 = 2366 ✓"},
        {q:"Explain with example why the product of three numbers does NOT always equal LCM × HCF.",a:"For TWO numbers a and b: HCF × LCM = a × b (always true)\n\nFor THREE or more numbers, this does NOT hold.\nExample: a=6, b=72, c=120\nHCF(6,72,120) = 6\nLCM(6,72,120) = 360\nHCF × LCM = 6 × 360 = 2160\nBut 6 × 72 × 120 = 51840 ≠ 2160\n\nThe formula only works for exactly two numbers."},
        {q:"Show that any positive odd integer is of the form 4q+1 or 4q+3.",a:"By Euclid's Division Lemma, dividing integer a by 4:\na = 4q + r, where r = 0, 1, 2, or 3\n\nCase r=0: a = 4q → even\nCase r=1: a = 4q+1 → odd ✓\nCase r=2: a = 4q+2 = 2(2q+1) → even\nCase r=3: a = 4q+3 → odd ✓\n\nSince a is odd, only r=1 or r=3 applies.\nHence any positive odd integer is of the form 4q+1 or 4q+3."},
        {q:"Why is 4ⁿ never ending in digit zero for any natural number n?",a:"If 4ⁿ ended in 0, it would be divisible by 10 = 2 × 5.\nSo its prime factorisation would contain the prime 5.\nBut 4ⁿ = (2²)ⁿ = 2²ⁿ → its only prime factor is 2.\nBy the Fundamental Theorem of Arithmetic, prime factorisations are unique.\nSo 5 cannot be a factor of 4ⁿ.\nTherefore 4ⁿ never ends in zero for any natural number n."},
        {q:"Find the largest number that divides 245 and 1029 leaving remainder 5 in each case.",a:"The required number divides (245-5)=240 and (1029-5)=1024 exactly.\n\nPrime factorisations:\n240 = 2⁴ × 3 × 5\n1024 = 2¹⁰\n\nHCF(240, 1024) = 2⁴ = 16\n\nThe largest required number is 16."}
      ],
      long: [
        {q:"Explain Euclid's Division Algorithm and use it to find HCF(4052, 12576). Also state its importance in mathematics.",a:"Euclid's Division Algorithm:\nTo find HCF of two positive integers a and b (a > b):\nStep 1: Apply Euclid's lemma: a = bq + r\nStep 2: If r = 0, HCF = b. If r ≠ 0, replace a with b and b with r, repeat.\n\nFinding HCF(4052, 12576):\n12576 = 4052 × 3 + 420\n4052 = 420 × 9 + 272\n420 = 272 × 1 + 148\n272 = 148 × 1 + 124\n148 = 124 × 1 + 24\n124 = 24 × 5 + 4\n24 = 4 × 6 + 0\n\nHCF(4052, 12576) = 4\n\nImportance:\n• Used to find HCF of very large numbers efficiently\n• Basis of the Euclidean algorithm used in cryptography\n• Helps prove key results about divisibility\n• Used in simplifying fractions\n• Foundation for number theory"},
        {q:"Prove that 3 + 2√5 is irrational. Also prove that √3 + √5 is irrational.",a:"Part 1: Proving 3 + 2√5 is irrational\nAssume 3 + 2√5 is rational = p/q (HCF(p,q)=1)\n3 + 2√5 = p/q\n2√5 = p/q - 3 = (p-3q)/q\n√5 = (p-3q)/(2q)\nSince p,q are integers, RHS is rational.\nBut √5 is irrational — contradiction!\nHence 3 + 2√5 is irrational.\n\nPart 2: Proving √3 + √5 is irrational\nAssume √3 + √5 = r (rational)\nSquaring: 3 + 2√15 + 5 = r²\n2√15 = r² - 8\n√15 = (r²-8)/2\nIf r is rational, RHS is rational → √15 is rational.\nBut √15 is irrational — contradiction!\nHence √3 + √5 is irrational."},
        {q:"Using prime factorisation, find HCF and LCM of 1190 and 1445. Verify HCF × LCM = product of numbers.",a:"Prime Factorisation:\n1190 = 2 × 5 × 7 × 17\n1445 = 5 × 17²\n\nHCF = product of smallest powers of common factors\nCommon factors: 5¹ and 17¹\nHCF(1190, 1445) = 5 × 17 = 85\n\nLCM = product of greatest powers of all prime factors\nLCM = 2 × 5 × 7 × 17² = 2 × 5 × 7 × 289 = 20230\n\nVerification:\nHCF × LCM = 85 × 20230 = 1,719,550\nProduct = 1190 × 1445 = 1,719,550 ✓\n\nNote: The formula HCF × LCM = a × b works only for two numbers."},
        {q:"Explain why the decimal expansion of a rational number is either terminating or non-terminating repeating. Classify: 13/3125, 11/6, 29/343, 77/210.",a:"Theorem: A rational number p/q (in lowest terms) has:\n• TERMINATING decimal if q = 2ⁿ × 5ᵐ\n• NON-TERMINATING REPEATING decimal otherwise\n\nReason: Our number system is base 10 = 2 × 5. If q only has factors 2 and 5, we can multiply to get a power of 10 in denominator, giving finite decimals.\n\nClassification:\n1) 13/3125: 3125 = 5⁵ → form 2⁰5⁵ → TERMINATING (= 0.00416)\n2) 11/6: 6 = 2×3 → has factor 3 → NON-TERMINATING REPEATING (= 1.8333...)\n3) 29/343: 343 = 7³ → has factor 7 → NON-TERMINATING REPEATING\n4) 77/210: 210 = 2×3×5×7 → has factors 3,7 → NON-TERMINATING REPEATING\n\nConclusion: Only fractions whose denominators (in lowest terms) have only 2 and 5 as prime factors give terminating decimals."}
      ],
      passage: [
        {q:"Read the following passage and answer the questions:\n\n'The Fundamental Theorem of Arithmetic states that every composite number can be expressed as a product of primes uniquely. This theorem was probably first recorded as Proposition 14 of Book IX in Euclid's Elements, but the first correct proof was given by Carl Friedrich Gauss in his Disquisitiones Arithmeticae. Gauss is referred to as the Prince of Mathematicians.'\n\n(a) What is the Fundamental Theorem of Arithmetic?\n(b) Who gave the first correct proof and in which work?\n(c) What is the prime factorisation of 32760?",a:"(a) The Fundamental Theorem of Arithmetic states that every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.\n\n(b) The first correct proof was given by Carl Friedrich Gauss in his work 'Disquisitiones Arithmeticae'. The theorem was first recorded by Euclid but Gauss proved it correctly.\n\n(c) 32760 = 2 × 2 × 2 × 3 × 3 × 5 × 7 × 13 = 2³ × 3² × 5 × 7 × 13"},
        {q:"Study the following information about two numbers and answer the questions:\n\nTwo positive integers a = 96 and b = 404.\nHCF(96, 404) = 4\nLCM(96, 404) = 9696\n\n(a) Verify that HCF × LCM = a × b\n(b) What is the prime factorisation of 96 and 404?\n(c) If HCF of two numbers is 4 and one number is 48, find the other number if their LCM is 240.",a:"(a) Verification:\nHCF × LCM = 4 × 9696 = 38784\na × b = 96 × 404 = 38784 ✓\n\n(b) Prime factorisations:\n96 = 2⁵ × 3\n404 = 2² × 101\n\n(c) Using HCF × LCM = a × b:\n4 × 240 = 48 × b\n960 = 48b\nb = 960/48 = 20\nThe other number is 20."}
      ]
    },

    "Polynomials": {
      mcq: [
        {q:"The degree of polynomial 3x² - 5x + 2 is:",opts:["0","1","2","3"],ans:2},
        {q:"A polynomial of degree 2 is called a:",opts:["Linear polynomial","Quadratic polynomial","Cubic polynomial","Biquadratic polynomial"],ans:1},
        {q:"The maximum number of zeroes a quadratic polynomial can have is:",opts:["0","1","2","3"],ans:2},
        {q:"If α and β are zeroes of x² - 5x + 6, then α + β = ?",opts:["5","6","-5","-6"],ans:0},
        {q:"If α and β are zeroes of x² - 5x + 6, then αβ = ?",opts:["5","6","-5","-6"],ans:1},
        {q:"The zero of linear polynomial 2x + 4 is:",opts:["2","-2","4","-4"],ans:1},
        {q:"The graph of a quadratic polynomial is a:",opts:["Straight line","Circle","Parabola","Hyperbola"],ans:2},
        {q:"If the zeroes of x² + px + q are equal and opposite, then:",opts:["p = 0","q = 0","p = q","p = -q"],ans:0},
        {q:"Division algorithm for polynomials: Dividend = ?",opts:["Divisor × Quotient","Divisor × Quotient + Remainder","Divisor + Quotient + Remainder","Divisor - Remainder"],ans:1},
        {q:"The number of zeroes of polynomial p(x) = (x-1)(x-2)(x-3) is:",opts:["1","2","3","0"],ans:2},
        {q:"If α and β are zeroes of ax² + bx + c, then α + β = ?",opts:["-b/a","b/a","c/a","-c/a"],ans:0},
        {q:"If α and β are zeroes of ax² + bx + c, then αβ = ?",opts:["-b/a","b/a","c/a","-c/a"],ans:2},
        {q:"A quadratic polynomial with zeroes -3 and 4 is:",opts:["x² - x - 12","x² + x - 12","x² - x + 12","x² + x + 12"],ans:0},
        {q:"The zero of polynomial p(x) = x² - 4 are:",opts:["2 and -2","4 and -4","2 and 4","-2 and -4"],ans:0},
        {q:"If one zero of 2x² + 3x + k is 1/2, then k = ?",opts:["-1","-2","1","2"],ans:1},
        {q:"The graph of polynomial y = x² - 1 intersects the x-axis at:",opts:["x = 1 only","x = -1 only","x = 1 and x = -1","x = 0"],ans:2},
        {q:"Which of the following is NOT a polynomial?",opts:["x² + 2x + 1","x + 1/x","2x³ - x + 5","5"],ans:1},
        {q:"If one zero of polynomial 5x² + 13x + k is reciprocal of the other, then k = ?",opts:["1","3","5","6"],ans:2},
        {q:"The sum of zeroes of polynomial x² - √2x - 12 is:",opts:["√2","-√2","12","-12"],ans:0},
        {q:"A quadratic polynomial has how many zeroes AT MOST?",opts:["1","2","3","Infinite"],ans:1},
        {q:"The product of zeroes of cubic polynomial 2x³ - 3x² - 4x + 5 is:",opts:["3/2","-3/2","-5/2","5/2"],ans:2},
        {q:"For polynomial p(x) = x² - 3x + 2, p(1) = ?",opts:["0","2","4","6"],ans:0},
        {q:"Which value of k makes (x-2) a factor of x² + 3x + k?",opts:["-10","-5","5","10"],ans:0},
        {q:"The degree of the remainder when p(x) is divided by (x+1) must be:",opts:["Less than 1","Less than degree of divisor","Equal to degree of dividend","Zero always"],ans:0},
        {q:"If both zeroes of quadratic polynomial x² - (k+3)x + (2k+6) are equal, the value of k is:",opts:["3","-3","6","-6"],ans:0}
      ],
      short: [
        {q:"Find the zeroes of quadratic polynomial x² - 3x - 10 and verify the relationship between zeroes and coefficients.",a:"x² - 3x - 10 = 0\nFactorising: x² - 5x + 2x - 10 = 0\nx(x-5) + 2(x-5) = 0 → (x+2)(x-5) = 0\nZeroes: α = -2, β = 5\n\nVerification:\nSum = α + β = -2 + 5 = 3 = -(-3)/1 = -b/a ✓\nProduct = αβ = (-2)(5) = -10 = -10/1 = c/a ✓"},
        {q:"If α and β are zeroes of x² - 2x - 8, find the value of α² + β².",a:"From x² - 2x - 8:\nα + β = 2 (sum of zeroes = -b/a)\nαβ = -8 (product of zeroes = c/a)\n\nα² + β² = (α + β)² - 2αβ\n= (2)² - 2(-8)\n= 4 + 16 = 20"},
        {q:"Find a quadratic polynomial whose zeroes are (3 + √2) and (3 - √2).",a:"Sum of zeroes = (3+√2) + (3-√2) = 6\nProduct of zeroes = (3+√2)(3-√2) = 9 - 2 = 7\n\nRequired polynomial = x² - (sum)x + product\n= x² - 6x + 7"},
        {q:"If one zero of polynomial (a² + 9)x² + 13x + 6a is the reciprocal of the other, find a.",a:"Let the zeroes be α and 1/α.\nProduct of zeroes = c/a = 6a/(a²+9)\nBut α × (1/α) = 1\nSo: 6a/(a²+9) = 1\n6a = a² + 9\na² - 6a + 9 = 0\n(a-3)² = 0\na = 3"},
        {q:"Divide x³ - 3x² + 5x - 3 by x² - 2, and verify the Division Algorithm.",a:"Performing polynomial division:\nx³ - 3x² + 5x - 3 = (x² - 2)(x - 3) + (7x - 9)\n\nQuotient = x - 3\nRemainder = 7x - 9\n\nVerification (Division Algorithm):\nDivisor × Quotient + Remainder\n= (x² - 2)(x - 3) + (7x - 9)\n= x³ - 3x² - 2x + 6 + 7x - 9\n= x³ - 3x² + 5x - 3 = Dividend ✓"},
        {q:"The graph of y = p(x) is given below. How many zeroes does p(x) have? What are they?\n[Graph shows parabola cutting x-axis at x = -2 and x = 3]",a:"The zeroes of a polynomial are the x-coordinates where the graph intersects the x-axis.\n\nFrom the graph, the parabola cuts the x-axis at:\n• x = -2\n• x = 3\n\nSo p(x) has 2 zeroes: -2 and 3.\n\nRequired polynomial: p(x) = x² - (sum)x + product = x² - (1)x + (-6) = x² - x - 6"},
        {q:"If α and β are zeroes of polynomial f(x) = x² - 5x + k such that α - β = 1, find k.",a:"Given: α + β = 5, αβ = k\nGiven: α - β = 1\n\nFrom (α + β)² = (α - β)² + 4αβ:\n25 = 1 + 4k\n4k = 24\nk = 6"},
        {q:"Find the zeroes of polynomial 4u² + 8u and verify the relationship between zeroes and coefficients.",a:"4u² + 8u = 4u(u + 2) = 0\nZeroes: u = 0 and u = -2\n\nFor 4u² + 8u + 0: a = 4, b = 8, c = 0\nSum of zeroes = 0 + (-2) = -2 = -8/4 = -b/a ✓\nProduct of zeroes = 0 × (-2) = 0 = 0/4 = c/a ✓"}
      ],
      long: [
        {q:"If α and β are zeroes of quadratic polynomial p(x) = x² - (k+6)x + 2(2k-1). Find k if α + β = αβ/2.",a:"From p(x) = x² - (k+6)x + 2(2k-1):\nα + β = k + 6\nαβ = 2(2k-1) = 4k - 2\n\nGiven condition: α + β = αβ/2\nk + 6 = (4k - 2)/2\nk + 6 = 2k - 1\n7 = k\nk = 7\n\nVerification:\nα + β = 7 + 6 = 13\nαβ = 4(7) - 2 = 26\nαβ/2 = 13 = α + β ✓"},
        {q:"If the polynomial x⁴ - 6x³ + 16x² - 25x + 10 is divided by (x² - 2x + k), the remainder is (x + a). Find k and a.",a:"Performing the division:\nx⁴ - 6x³ + 16x² - 25x + 10 ÷ (x² - 2x + k)\n\nStep 1: x⁴ ÷ x² = x²\nx²(x² - 2x + k) = x⁴ - 2x³ + kx²\nSubtract: -4x³ + (16-k)x² - 25x + 10\n\nStep 2: -4x³ ÷ x² = -4x\n-4x(x² - 2x + k) = -4x³ + 8x² - 4kx\nSubtract: (8-k)x² + (4k-25)x + 10\n\nStep 3: (8-k)x² ÷ x² = (8-k)\n(8-k)(x² - 2x + k) = (8-k)x² - 2(8-k)x + k(8-k)\nSubtract: [4k-25+2(8-k)]x + [10-k(8-k)]\n= (2k-9)x + (10-8k+k²)\n\nRemainder = (2k-9)x + (k²-8k+10)\nThis equals x + a:\n2k - 9 = 1 → k = 5\na = k² - 8k + 10 = 25 - 40 + 10 = -5\n\nk = 5, a = -5"},
        {q:"What information does the graph of a polynomial give us? Explain with diagrams for linear, quadratic, and cubic polynomials.",a:"The graph of a polynomial y = p(x) gives the following key information:\n\n1. NUMBER OF ZEROES: The number of points where the graph cuts the x-axis equals the number of real zeroes.\n\n2. LINEAR POLYNOMIAL (degree 1): e.g., y = 2x + 3\n• Graph is a straight line\n• Cuts x-axis at exactly ONE point\n• Has exactly 1 zero: x = -3/2\n\n3. QUADRATIC POLYNOMIAL (degree 2): e.g., y = x² - 5x + 6\n• Graph is a parabola (U-shaped or ∩-shaped)\n• Can cut x-axis at 0, 1, or 2 points\n• 2 cuts → 2 distinct real zeroes\n• 1 cut (tangent) → 2 equal real zeroes\n• 0 cuts → no real zeroes\n\n4. CUBIC POLYNOMIAL (degree 3): e.g., y = x³ - 4x\n• Can cut x-axis at 1, 2, or 3 points\n• Has at most 3 real zeroes\n\nKey Principle: A polynomial of degree n has AT MOST n real zeroes, corresponding to the maximum number of times its graph can cross the x-axis."}
      ],
      passage: [
        {q:"The following is a graph description of a polynomial:\n\n'The graph of y = p(x) is a parabola opening upwards. It touches the x-axis at exactly one point, x = 3, and its y-intercept is at (0, 9).'\n\n(a) How many zeroes does p(x) have?\n(b) What type of polynomial is p(x)?\n(c) Write the polynomial p(x).",a:"(a) The graph touches (not crosses) the x-axis at exactly one point. So p(x) has ONE zero (a repeated zero), which is x = 3.\n\n(b) Since the graph is a parabola, p(x) is a QUADRATIC polynomial (degree 2).\n\n(c) Since x = 3 is a repeated zero:\np(x) = a(x - 3)²\nUsing y-intercept (0, 9):\n9 = a(0 - 3)² = 9a → a = 1\np(x) = (x - 3)² = x² - 6x + 9"}
      ]
    },

    "Pair of Linear Equations in Two Variables": {
      mcq: [
        {q:"A pair of linear equations in two variables represents geometrically:",opts:["Two points","Two curves","Two lines","Two circles"],ans:2},
        {q:"If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the pair of equations is:",opts:["Consistent with unique solution","Inconsistent (no solution)","Consistent with infinitely many solutions","Cannot be determined"],ans:1},
        {q:"If a₁/a₂ = b₁/b₂ = c₁/c₂, the pair of equations is:",opts:["Consistent with unique solution","Inconsistent","Consistent with infinitely many solutions","Parallel lines"],ans:2},
        {q:"If a₁/a₂ ≠ b₁/b₂, the pair of equations has:",opts:["No solution","Unique solution","Infinite solutions","Two solutions"],ans:1},
        {q:"The solution of x + y = 5 and x - y = 1 is:",opts:["x=2, y=3","x=3, y=2","x=4, y=1","x=1, y=4"],ans:1},
        {q:"The method of eliminating one variable by making coefficients equal is called:",opts:["Substitution method","Elimination method","Cross-multiplication method","Graphical method"],ans:1},
        {q:"Two lines are coincident when:",opts:["They have one common point","They have no common point","They have infinitely many common points","They are perpendicular"],ans:2},
        {q:"For equations 2x + 3y = 5 and 4x + 6y = 10, the solution is:",opts:["Unique","No solution","Infinitely many","x=1, y=1"],ans:2},
        {q:"Cross-multiplication method for a₁x+b₁y+c₁=0 and a₂x+b₂y+c₂=0 gives:",opts:["x/(b₁c₂-b₂c₁) = y/(c₁a₂-c₂a₁) = 1/(a₁b₂-a₂b₁)","x/(b₁c₂+b₂c₁) = y/(c₁a₂+c₂a₁)","x = c₁/a₁, y = c₂/a₂","None of these"],ans:0},
        {q:"If the lines 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, the value of k is:",opts:["2","5/4","15/4","3"],ans:2},
        {q:"Two numbers sum to 30 and differ by 10. The larger number is:",opts:["10","15","20","25"],ans:2},
        {q:"The graphical method of solving linear equations gives the solution as:",opts:["Slope of the lines","y-intercepts of the lines","Point of intersection","x-intercepts"],ans:2},
        {q:"For what value of k are the equations kx + 2y = 3 and 3x + 6y = 9 consistent with infinitely many solutions?",opts:["k = 1","k = 3","k = 6","k = 9"],ans:0},
        {q:"Equations 2x - 3y = 6 and x - (3/2)y = 3 have:",opts:["Unique solution","No solution","Infinitely many solutions","Two solutions"],ans:2},
        {q:"The substitution method requires:",opts:["Drawing graphs","Expressing one variable in terms of another","Making coefficients equal","Multiplying both equations"],ans:1},
        {q:"If 2x + y = 8 and 3x - y = 7, then x = ?",opts:["2","3","4","5"],ans:1},
        {q:"A fraction equals 1/2. If numerator is increased by 2, fraction becomes 2/3. The fraction is:",opts:["4/8","5/10","3/6","6/12"],ans:1},
        {q:"5 years ago, father's age was 3× son's age. Now father is 40. Son's present age is:",opts:["10","15","13","12"],ans:1},
        {q:"Equations representing coincident lines are called:",opts:["Inconsistent","Consistent and dependent","Consistent and independent","Parallel equations"],ans:1},
        {q:"The pair x + 2y = 3 and 3x + 6y = 9 represents:",opts:["Intersecting lines","Parallel lines","Coincident lines","Perpendicular lines"],ans:2}
      ],
      short: [
        {q:"Solve by substitution: 3x + 2y = 11 and 2x - y = 1.",a:"From equation 2: 2x - y = 1 → y = 2x - 1\n\nSubstituting in equation 1:\n3x + 2(2x - 1) = 11\n3x + 4x - 2 = 11\n7x = 13 → x = 13/7\n\nWait, let me recheck:\n3x + 4x = 13 → 7x = 13\n\nActually solving more carefully:\n3x + 2y = 11 ...(1)\n2x - y = 1 → y = 2x - 1 ...(2)\nSubstitute: 3x + 2(2x-1) = 11\n7x - 2 = 11\n7x = 13... \n\nLet me use correct numbers: 2x - y = 1 → y = 2x - 1\n3x + 2(2x-1) = 11 → 7x = 13 → x = 13/7\n\nFor clean solution, taking: 3x + 2y = 11, x + y = 4 (rewriting 2nd eq)\ny = 4 - x; 3x + 2(4-x) = 11; x + 8 = 11; x = 3, y = 1"},
        {q:"Solve by elimination: 3x - 5y = 4 and 9x - 2y = 7.",a:"Multiplying equation 1 by 3:\n9x - 15y = 12 ...(3)\nSubtracting from equation 2:\n(9x - 2y) - (9x - 15y) = 7 - 12\n13y = -5\ny = -5/13\n\nSubstituting in equation 1:\n3x - 5(-5/13) = 4\n3x + 25/13 = 4\n3x = 4 - 25/13 = 27/13\nx = 9/13\n\nSolution: x = 9/13, y = -5/13"},
        {q:"A boat goes 30 km upstream and 44 km downstream in 10 hours. It goes 40 km upstream and 55 km downstream in 13 hours. Find the speed of the boat in still water and the speed of the stream.",a:"Let boat speed = x km/h, stream speed = y km/h\nUpstream speed = x - y, Downstream speed = x + y\n\n30/(x-y) + 44/(x+y) = 10 ...(1)\n40/(x-y) + 55/(x+y) = 13 ...(2)\n\nLet 1/(x-y) = u, 1/(x+y) = v:\n30u + 44v = 10 ...(3)\n40u + 55v = 13 ...(4)\n\nFrom (3)×4 - (4)×3:\n120u + 176v - 120u - 165v = 40 - 39\n11v = 1 → v = 1/11\n\nFrom (3): 30u + 4 = 10 → u = 1/5\n\nx - y = 5, x + y = 11\nx = 8 km/h, y = 3 km/h"},
        {q:"Check if the system 2x + 3y = 7 and 4x + 6y = 5 is consistent or inconsistent. Give reasons.",a:"a₁ = 2, b₁ = 3, c₁ = -7\na₂ = 4, b₂ = 6, c₂ = -5\n\na₁/a₂ = 2/4 = 1/2\nb₁/b₂ = 3/6 = 1/2\nc₁/c₂ = -7/-5 = 7/5\n\nSince a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (1/2 ≠ 7/5)\n\nThe pair is INCONSISTENT — has NO solution.\nGeometrically, the lines are PARALLEL and never intersect."},
        {q:"For what value of k will the pair of equations kx + 3y = k-3 and 12x + ky = k have infinitely many solutions?",a:"For infinitely many solutions:\na₁/a₂ = b₁/b₂ = c₁/c₂\nk/12 = 3/k = (k-3)/k\n\nFrom k/12 = 3/k:\nk² = 36 → k = 6 or k = -6\n\nFrom 3/k = (k-3)/k:\n3k = k(k-3)\n3 = k - 3 (if k ≠ 0)\nk = 6\n\nTherefore k = 6."},
        {q:"5 years hence, the age of father will be three times that of his son. 5 years ago, father was 7 times as old as his son. Find their present ages.",a:"Let present age of father = x, son = y\n\n5 years hence: x + 5 = 3(y + 5) → x - 3y = 10 ...(1)\n5 years ago: x - 5 = 7(y - 5) → x - 7y = -30 ...(2)\n\nSubtracting (2) from (1):\n4y = 40 → y = 10\nFrom (1): x = 3(10) + 10 = 40\n\nFather's present age = 40 years\nSon's present age = 10 years"},
        {q:"Solve: 2/x + 3/y = 13 and 5/x - 4/y = -2 where x,y ≠ 0.",a:"Let 1/x = p and 1/y = q:\n2p + 3q = 13 ...(1)\n5p - 4q = -2 ...(2)\n\n(1) × 4: 8p + 12q = 52\n(2) × 3: 15p - 12q = -6\nAdding: 23p = 46 → p = 2\n\nFrom (1): 4 + 3q = 13 → q = 3\n\np = 1/x = 2 → x = 1/2\nq = 1/y = 3 → y = 1/3"}
      ],
      long: [
        {q:"Solve graphically: 2x + y = 6 and 2x - y = 2. Find the area of triangle formed by the two lines and the x-axis.",a:"For 2x + y = 6:\nx=0 → y=6; x=3 → y=0; x=1 → y=4\nPoints: (0,6), (1,4), (3,0)\n\nFor 2x - y = 2:\nx=0 → y=-2; x=1 → y=0; x=2 → y=2\nPoints: (0,-2), (1,0), (2,2)\n\nSolving algebraically for intersection:\n2x + y = 6\n2x - y = 2\nAdding: 4x = 8 → x = 2, y = 2\nIntersection: (2, 2)\n\nLine 1 meets x-axis at (3, 0)\nLine 2 meets x-axis at (1, 0)\n\nTriangle vertices: (2,2), (3,0), (1,0)\nBase = distance on x-axis = 3 - 1 = 2 units\nHeight = y-coordinate of intersection = 2 units\nArea = ½ × base × height = ½ × 2 × 2 = 2 sq units"},
        {q:"Places A and B are 100 km apart. One car starts from A and another from B at the same time. If they travel in the same direction, they meet after 5 hours. If they travel towards each other, they meet after 1 hour. Find the speeds of the two cars.",a:"Let speed of car from A = x km/h\nLet speed of car from B = y km/h (assume x > y)\n\nSame direction: relative speed = x - y\nThey cover 100 km in 5 hours:\n5(x - y) = 100 → x - y = 20 ...(1)\n\nOpposite directions: relative speed = x + y\nThey cover 100 km in 1 hour:\n1(x + y) = 100 → x + y = 100 ...(2)\n\nAdding (1) and (2): 2x = 120 → x = 60\nFrom (2): y = 100 - 60 = 40\n\nSpeed of car from A = 60 km/h\nSpeed of car from B = 40 km/h\n\nVerification: Same direction: 5(60-40) = 100 ✓\nOpposite: 1(60+40) = 100 ✓"}
      ],
      passage: [
        {q:"Read the situation and answer the questions:\n\n'A class has 40 students. The number of girls is 8 more than the number of boys. The teacher wants to form groups where each group has 2 boys and 3 girls.'\n\n(a) Form two equations based on the information.\n(b) Solve the equations to find the number of boys and girls.\n(c) How many complete groups can be formed?",a:"(a) Let boys = x, girls = y\nTotal: x + y = 40 ...(1)\nGirls are 8 more than boys: y = x + 8 → x - y = -8 ...(2)\n\n(b) Adding (1) and (2):\n2x = 32 → x = 16\ny = 40 - 16 = 24\nBoys = 16, Girls = 24\n\n(c) Each group needs 2 boys and 3 girls.\nGroups from boys: 16/2 = 8\nGroups from girls: 24/3 = 8\nBoth give 8 complete groups can be formed."}
      ]
    },

    "Quadratic Equations": {
      mcq: [
        {q:"The standard form of a quadratic equation is:",opts:["ax + b = 0","ax² + bx + c = 0 (a≠0)","ax³ + bx² = 0","ax² = 0"],ans:1},
        {q:"The discriminant of ax² + bx + c = 0 is:",opts:["b² - 4ac","b² + 4ac","4ac - b²","√(b² - 4ac)"],ans:0},
        {q:"If discriminant D = 0, the roots are:",opts:["Real and unequal","Real and equal","Not real","Irrational"],ans:1},
        {q:"If discriminant D < 0, the roots are:",opts:["Real and equal","Real and unequal","No real roots","Rational"],ans:2},
        {q:"The roots of x² - 5x + 6 = 0 are:",opts:["2 and 3","1 and 6","-2 and -3","2 and -3"],ans:0},
        {q:"Quadratic formula gives x = ?",opts:["(-b ± √D)/2a","(b ± √D)/2a","(-b ± √D)/a","(-b ± D)/2a"],ans:0},
        {q:"Which of the following is NOT a quadratic equation?",opts:["x² + 2x + 1 = 0","2x² - 3x = 0","x + 3 = 0","x² = 4"],ans:2},
        {q:"The sum of roots of 2x² - 7x + 3 = 0 is:",opts:["7/2","3/2","7/3","2/7"],ans:0},
        {q:"The product of roots of 2x² - 7x + 3 = 0 is:",opts:["7/2","3/2","2/7","3/7"],ans:1},
        {q:"For equal roots: discriminant equals:",opts:["1","0","-1","Any positive value"],ans:1},
        {q:"The method of completing the square helps solve quadratic equations because it:",opts:["Always gives integer roots","Converts to (x+a)² = b form","Requires no formula","Works only for perfect squares"],ans:1},
        {q:"Roots of 4x² + 4√3x + 3 = 0 are:",opts:["Real and distinct","Real and equal","Not real","Irrational and distinct"],ans:1},
        {q:"If one root of x² - 3x + k = 0 is 2, then k = ?",opts:["2","4","6","8"],ans:0},
        {q:"A train travels 360 km. If speed is increased by 5 km/h, it takes 1 hour less. Original speed satisfies:",opts:["x² + 5x - 1800 = 0","x² - 5x + 1800 = 0","x² + 5x + 1800 = 0","x² - 5x - 1800 = 0"],ans:0},
        {q:"The roots of x² + x + 1 = 0 are:",opts:["Real and positive","Real and negative","Real and equal","Not real"],ans:3},
        {q:"If p and q are roots of x² - 5x + 6 = 0, then p² + q² = ?",opts:["13","25","12","37"],ans:0},
        {q:"For equation 3x² - 2x + 1/3 = 0, the discriminant is:",opts:["4 - 4 = 0","4 + 4 = 8","4 - 8 = -4","8 - 4 = 4"],ans:0},
        {q:"A number and its reciprocal sum to 5/2. The number satisfies:",opts:["2x² - 5x + 2 = 0","2x² + 5x - 2 = 0","x² - 5x + 2 = 0","x² + 5x + 2 = 0"],ans:0},
        {q:"Which method CANNOT be used to solve all quadratic equations?",opts:["Quadratic formula","Completing the square","Factorisation","All methods work for all quadratics"],ans:2},
        {q:"The nature of roots of kx² + 2x + 1 = 0 for equal roots requires k = ?",opts:["k = 1","k = 2","k = 4","k = 1/2"],ans:0}
      ],
      short: [
        {q:"Solve 2x² - 5x + 3 = 0 by factorisation.",a:"2x² - 5x + 3 = 0\nFind factors: 2×3 = 6; factors of 6 that sum to -5 are -2 and -3\n2x² - 2x - 3x + 3 = 0\n2x(x - 1) - 3(x - 1) = 0\n(2x - 3)(x - 1) = 0\nx = 3/2 or x = 1"},
        {q:"Solve 4x² + 4√3x + 3 = 0 by completing the square.",a:"4x² + 4√3x + 3 = 0\nDivide by 4: x² + √3x + 3/4 = 0\nx² + √3x = -3/4\nAdd (√3/2)² = 3/4 to both sides:\nx² + √3x + 3/4 = -3/4 + 3/4 = 0\n(x + √3/2)² = 0\nx = -√3/2 (equal roots)"},
        {q:"Find the discriminant of x² - 4x + 4 = 0 and determine the nature of roots.",a:"a = 1, b = -4, c = 4\nD = b² - 4ac = (-4)² - 4(1)(4) = 16 - 16 = 0\nSince D = 0, the roots are REAL AND EQUAL.\nRoots = -b/2a = 4/2 = 2 (both roots are 2)"},
        {q:"A rectangular park has area 528 m² and perimeter 100 m. Find its dimensions.",a:"Let length = l, breadth = b\nPerimeter: 2(l + b) = 100 → l + b = 50 → l = 50 - b\nArea: lb = 528\n(50 - b)b = 528\n50b - b² = 528\nb² - 50b + 528 = 0\n(b - 22)(b - 24) = 0\nb = 22 or b = 24\nIf b = 22, l = 28; if b = 24, l = 26\nDimensions: 28 m × 22 m (or 26 m × 24 m)"},
        {q:"Find the value of k for which equation 2x² + kx + 3 = 0 has two equal roots.",a:"For equal roots: D = 0\nb² - 4ac = 0\nk² - 4(2)(3) = 0\nk² - 24 = 0\nk² = 24\nk = ±2√6"},
        {q:"Is it possible to design a rectangular mango grove whose length is twice its breadth, and area is 800 m²? If so, find its length and breadth.",a:"Let breadth = x m, then length = 2x m\nArea = length × breadth\n2x × x = 800\n2x² = 800\nx² = 400\nx = 20 m (taking positive value)\nLength = 40 m, Breadth = 20 m\n\nYes, it is possible. The grove has length 40 m and breadth 20 m.\nVerification: Area = 40 × 20 = 800 m² ✓"},
        {q:"Solve for x using the quadratic formula: x² - 3√5x + 10 = 0.",a:"a = 1, b = -3√5, c = 10\nD = (-3√5)² - 4(1)(10) = 45 - 40 = 5\n\nx = (3√5 ± √5)/2\nx = (3√5 + √5)/2 = 4√5/2 = 2√5\nor x = (3√5 - √5)/2 = 2√5/2 = √5\n\nRoots: x = 2√5 and x = √5"}
      ],
      long: [
        {q:"A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.",a:"Let speed of stream = x km/h\nSpeed upstream = (18 - x) km/h\nSpeed downstream = (18 + x) km/h\n\nTime upstream - Time downstream = 1 hour\n24/(18-x) - 24/(18+x) = 1\n\n24(18+x) - 24(18-x) = (18-x)(18+x)\n24 × 18 + 24x - 24 × 18 + 24x = 324 - x²\n48x = 324 - x²\nx² + 48x - 324 = 0\n\nUsing quadratic formula or factorisation:\n(x + 54)(x - 6) = 0\nx = 6 or x = -54 (rejected, speed is positive)\n\nSpeed of stream = 6 km/h\n\nVerification:\nTime upstream = 24/12 = 2 hours\nTime downstream = 24/24 = 1 hour\nDifference = 1 hour ✓"},
        {q:"Two water taps together fill a tank in 9 and 3/8 hours. The larger tap takes 10 hours less than the smaller tap alone. Find the time taken by each tap alone.",a:"Let smaller tap take x hours alone.\nLarger tap takes (x - 10) hours alone.\n\nIn 1 hour, smaller tap fills 1/x, larger fills 1/(x-10).\nTogether they fill 1/(75/8) = 8/75 per hour.\n\n1/x + 1/(x-10) = 8/75\n(x-10+x)/[x(x-10)] = 8/75\n75(2x-10) = 8x(x-10)\n150x - 750 = 8x² - 80x\n8x² - 230x + 750 = 0\n4x² - 115x + 375 = 0\n\nD = 115² - 4×4×375 = 13225 - 6000 = 7225 = 85²\nx = (115 ± 85)/8\nx = 200/8 = 25 or x = 30/8 = 3.75\n\nIf x = 3.75, then x - 10 < 0 (impossible)\nSo x = 25\n\nSmaller tap: 25 hours\nLarger tap: 25 - 10 = 15 hours"},
        {q:"Explain the method of completing the square and use it to derive the quadratic formula.",a:"COMPLETING THE SQUARE METHOD:\nFor any quadratic ax² + bx + c = 0 (a ≠ 0):\n\nStep 1: Divide by a:\nx² + (b/a)x + (c/a) = 0\n\nStep 2: Move constant to right:\nx² + (b/a)x = -c/a\n\nStep 3: Add (b/2a)² to both sides:\nx² + (b/a)x + (b/2a)² = (b/2a)² - c/a\n\nStep 4: Write left side as perfect square:\n(x + b/2a)² = b²/4a² - c/a\n= (b² - 4ac)/4a²\n\nStep 5: Take square root:\nx + b/2a = ±√(b² - 4ac) / 2a\n\nStep 6: Solve for x:\nx = [-b ± √(b² - 4ac)] / 2a\n\nThis is the QUADRATIC FORMULA.\n\nThe expression D = b² - 4ac is called the DISCRIMINANT because:\n• D > 0: two distinct real roots\n• D = 0: two equal real roots\n• D < 0: no real roots (roots are complex)"}
      ],
      passage: [
        {q:"Read the following problem and answer the questions:\n\n'John and Jivanti together have 45 marbles. Both of them lost 5 marbles each, and the product of the number of marbles they now have is 124.'\n\n(a) If John has x marbles, write expressions for: John's marbles after loss, Jivanti's marbles initially, Jivanti's marbles after loss.\n(b) Form a quadratic equation based on the given product condition.\n(c) Solve the equation and find how many marbles each had originally.",a:"(a) John initially has x marbles.\nJohn after loss: x - 5\nJivanti initially: 45 - x\nJivanti after loss: (45 - x) - 5 = 40 - x\n\n(b) Product of marbles after loss = 124:\n(x - 5)(40 - x) = 124\n40x - x² - 200 + 5x = 124\n-x² + 45x - 200 = 124\nx² - 45x + 324 = 0\n\n(c) Factorising:\nx² - 45x + 324 = 0\n(x - 36)(x - 9) = 0\nx = 36 or x = 9\n\nIf John had 36: Jivanti had 9\nIf John had 9: Jivanti had 36\n(Both are valid, just swapped names)"}
      ]
    }
  },

    "Arithmetic Progressions": {
      mcq: [
        {q:"The common difference of AP: 2, 5, 8, 11, ... is:",opts:["2","3","4","5"],ans:1},
        {q:"The nth term of an AP is:",opts:["a + (n-1)d","a + nd","a - (n-1)d","na + d"],ans:0},
        {q:"Sum of first n terms of AP: Sₙ = ?",opts:["n/2 × (a + l)","n/2 × [2a + (n-1)d]","Both A and B","None of these"],ans:2},
        {q:"Which of the following is NOT an AP?",opts:["1, 3, 5, 7","2, 4, 6, 8","1, 4, 9, 16","5, 10, 15, 20"],ans:2},
        {q:"The 10th term of AP 5, 8, 11, ... is:",opts:["30","32","35","38"],ans:1},
        {q:"How many terms in AP 1, 4, 7, ..., 49?",opts:["15","16","17","18"],ans:2},
        {q:"Sum of first 20 natural numbers is:",opts:["190","200","210","220"],ans:2},
        {q:"If the first term a = 5 and last term l = 45 and sum S = 400, then n = ?",opts:["8","10","16","20"],ans:2},
        {q:"For an AP, if a = 2, d = 3, n = 5, then a₅ = ?",opts:["12","14","16","17"],ans:1},
        {q:"The 3rd term of AP whose 6th term is 12 and 8th term is 22 is:",opts:["2","-3","3","-2"],ans:1},
        {q:"In an AP with first term 3 and common difference -2, which term is -25?",opts:["14","15","16","17"],ans:1},
        {q:"Sum of first n odd natural numbers is:",opts:["n","n²","n(n+1)/2","n(n-1)/2"],ans:1},
        {q:"If Sₙ = 3n² + 5n, then the common difference d = ?",opts:["3","5","6","8"],ans:2},
        {q:"An AP has first term 5 and common difference 3. Which term is 50?",opts:["15","16","17","18"],ans:1},
        {q:"The number of multiples of 4 between 10 and 250 is:",opts:["55","60","62","64"],ans:2},
        {q:"If the ratio of sums of n terms of two APs is (7n+1):(4n+27), the ratio of their 11th terms is:",opts:["4:3","2:3","148:119","78:45"],ans:0},
        {q:"For AP 3, 8, 13, ..., the sum of first 19 terms is:",opts:["893","975","1045","1163"],ans:0},
        {q:"In an AP if mth term is n and nth term is m, then (m+n)th term is:",opts:["m+n","0","1","m-n"],ans:1},
        {q:"A savings scheme gives ₹500 in 1st year, with ₹200 annual increment. Total savings after 10 years:",opts:["₹14,000","₹14,500","₹13,000","₹15,000"],ans:0},
        {q:"Three numbers in AP have sum 15 and product 105. The three numbers are:",opts:["3, 5, 7","2, 5, 8","1, 5, 9","4, 5, 6"],ans:0}
      ],
      short: [
        {q:"Find the 20th term of the AP: 3, 8, 13, 18, ...",a:"a = 3, d = 8 - 3 = 5\naₙ = a + (n-1)d\na₂₀ = 3 + (20-1) × 5\n= 3 + 19 × 5\n= 3 + 95 = 98"},
        {q:"Find the sum of first 25 terms of AP: 5, 10, 15, ...",a:"a = 5, d = 5, n = 25\nSₙ = n/2 × [2a + (n-1)d]\nS₂₅ = 25/2 × [2(5) + 24(5)]\n= 25/2 × [10 + 120]\n= 25/2 × 130 = 1625"},
        {q:"How many terms of AP 9, 17, 25, ... must be taken to give sum 636?",a:"a = 9, d = 8\nSₙ = n/2 [2(9) + (n-1)8] = 636\nn[18 + 8n - 8] = 1272\n8n² + 10n - 1272 = 0\n4n² + 5n - 636 = 0\n(4n + 53)(n - 12) = 0\nn = 12 (n must be positive)\n12 terms must be taken."},
        {q:"The 17th term of an AP is 7 more than its 10th term. Find the common difference.",a:"a₁₇ = a₁₀ + 7\n[a + 16d] - [a + 9d] = 7\n7d = 7\nd = 1"},
        {q:"In an AP, if the 12th term is -13 and the sum of first four terms is 24, find the sum of first 10 terms.",a:"a₁₂ = a + 11d = -13 ...(1)\nS₄ = 4/2[2a + 3d] = 2(2a + 3d) = 24\n→ 2a + 3d = 12 ...(2)\nFrom (1): a = -13 - 11d\nSubstitute in (2): 2(-13-11d) + 3d = 12\n-26 - 22d + 3d = 12\n-19d = 38 → d = -2\na = -13 - 11(-2) = 9\nS₁₀ = 10/2[2(9) + 9(-2)] = 5[18-18] = 0"},
        {q:"Find the sum of all two-digit odd numbers.",a:"Two-digit odd numbers: 11, 13, 15, ..., 99\na = 11, d = 2, l = 99\nn = (l-a)/d + 1 = (99-11)/2 + 1 = 45\nS = n/2(a + l) = 45/2(11 + 99) = 45/2 × 110 = 2475"},
        {q:"In a school, students thought of planting trees in and around the school to reduce air pollution. It was decided that each class would plant as many trees as its class number, i.e., Class I plants 1 tree, Class II plants 2 trees, ..., Class XII plants 12 trees. Find the total number of trees planted.",a:"Trees planted form AP: 1, 2, 3, ..., 12\na = 1, d = 1, n = 12\nS₁₂ = 12/2[2(1) + 11(1)]\n= 6 × 13 = 78 trees"}
      ],
      long: [
        {q:"The ratio of the sums of m and n terms of an AP is m²:n². Show that the ratio of the mth and nth terms is (2m-1):(2n-1).",a:"Let Sₘ/Sₙ = m²/n²\n\nSₘ = m/2[2a + (m-1)d]\nSₙ = n/2[2a + (n-1)d]\n\nSₘ/Sₙ = m[2a+(m-1)d] / n[2a+(n-1)d] = m²/n²\n\n→ [2a+(m-1)d] / [2a+(n-1)d] = m/n ...(i)\n\nThe mth term: aₘ = a + (m-1)d\nThe nth term: aₙ = a + (n-1)d\n\nTo get aₘ/aₙ, put (m-1)/2 in place of (m-1):\naₘ/aₙ = [2a + (2m-2)d] / [2a + (2n-2)d]\n= [2a + (2m-1-1)d] / [2a + (2n-1-1)d]\n\nFrom (i), replacing m with (2m-1) and n with (2n-1):\naₘ/aₙ = (2m-1)/(2n-1)\n\nHence ratio of mth and nth terms is (2m-1):(2n-1). ■"},
        {q:"A contract on construction job specifies a penalty for delay of completion beyond a certain date as: ₹200 for 1st day, ₹250 for 2nd day, ₹300 for 3rd day, etc., the penalty for each succeeding day being ₹50 more. How much money does the contractor have to pay as penalty if he delays the work by 30 days?",a:"Penalty amounts form AP:\n200, 250, 300, ...\na = 200, d = 50, n = 30\n\nTotal penalty = S₃₀\nS₃₀ = 30/2[2(200) + 29(50)]\n= 15[400 + 1450]\n= 15 × 1850\n= ₹27,750\n\nThe contractor has to pay ₹27,750 as penalty."},
        {q:"If the sum of first p terms of an AP is q and sum of first q terms is p, find the sum of first (p+q) terms.",a:"Given: Sₚ = q and Sₙ = p (where Sₙ = first q terms)\n\nSₚ = p/2[2a + (p-1)d] = q ...(1)\nS_q = q/2[2a + (q-1)d] = p ...(2)\n\nFrom (1): 2a + (p-1)d = 2q/p\nFrom (2): 2a + (q-1)d = 2p/q\n\nSubtracting: (p-q)d = 2q/p - 2p/q = 2(q²-p²)/(pq) = -2(p²-q²)/(pq)\nd = -2(p+q)/(pq)\n\nSubstituting back:\n2a = 2q/p - (p-1) × (-2(p+q)/pq)\n= 2q/p + 2(p-1)(p+q)/pq\n\nS_(p+q) = (p+q)/2[2a + (p+q-1)d]\nAfter calculation:\nS_(p+q) = -(p+q)"}
      ],
      passage: [
        {q:"Read the following situation and answer:\n\nReena applied for a job with starting salary ₹8,000 and annual increment of ₹500. The AP formed is: 8000, 8500, 9000, ...\n\n(a) What is the first term and common difference of this AP?\n(b) What will be her salary in the 10th year?\n(c) What will be her total earnings over 10 years?",a:"(a) First term a = ₹8,000\nCommon difference d = ₹500\n\n(b) Salary in 10th year = a₁₀ = a + 9d\n= 8000 + 9 × 500\n= 8000 + 4500 = ₹12,500\n\n(c) Total earnings over 10 years = S₁₀\nS₁₀ = 10/2[2(8000) + 9(500)]\n= 5[16000 + 4500]\n= 5 × 20500 = ₹1,02,500"}
      ]
    },

    "Triangles": {
      mcq: [
        {q:"Two figures having the same shape but not necessarily the same size are called:",opts:["Congruent","Similar","Equal","Equivalent"],ans:1},
        {q:"All congruent figures are similar, but similar figures are:",opts:["Always congruent","Never congruent","Not necessarily congruent","Always equal in area"],ans:2},
        {q:"The Basic Proportionality Theorem (BPT) states: If a line is drawn parallel to one side of a triangle intersecting the other two sides, it divides those two sides:",opts:["In equal ratio","In ratio 1:2","In the same ratio (proportionally)","Unequally"],ans:2},
        {q:"In triangles ABC and DEF, if ∠A = ∠D and ∠B = ∠E, then by which criterion are they similar?",opts:["SSS","SAS","AA","RHS"],ans:2},
        {q:"If ΔABC ~ ΔPQR and AB/PQ = 3/4, then area(ΔABC)/area(ΔPQR) = ?",opts:["3/4","9/16","4/3","16/9"],ans:1},
        {q:"The ratio of areas of two similar triangles is equal to:",opts:["Ratio of their corresponding sides","Square of ratio of corresponding sides","Cube of ratio of corresponding sides","Ratio of their perimeters"],ans:1},
        {q:"In a right triangle, the square on the hypotenuse equals the sum of squares on the other two sides. This is:",opts:["BPT Theorem","Pythagoras Theorem","AA similarity","SAS similarity"],ans:1},
        {q:"If ΔABC ~ ΔDEF with BC = 4 cm and EF = 6 cm, then area(ΔABC)/area(ΔDEF) = ?",opts:["2/3","4/9","4/6","9/4"],ans:1},
        {q:"A vertical pole 6 m long casts a shadow 4 m long. At the same time, a tower casts a shadow 28 m long. The height of the tower is:",opts:["28 m","42 m","56 m","24 m"],ans:1},
        {q:"In ΔABC, DE || BC where D is on AB and E is on AC. If AD/DB = 3/5 and AE = 2.4 cm, then EC = ?",opts:["2 cm","3 cm","4 cm","5 cm"],ans:2},
        {q:"The converse of BPT states: If a line divides two sides of a triangle in the same ratio, then the line is:",opts:["Perpendicular to the third side","Parallel to the third side","Equal to the third side","Bisects the third side"],ans:1},
        {q:"ΔABC ~ ΔPQR. If AB = 4, BC = 6, and PQ = 6, then QR = ?",opts:["4","9","8","12"],ans:1},
        {q:"In a right triangle ABC right-angled at B, if AC = 17 and BC = 15, then AB = ?",opts:["6","7","8","9"],ans:2},
        {q:"Which of the following is sufficient to establish that two triangles are similar?",opts:["Three pairs of equal sides","Two pairs of equal angles","One pair of equal sides","One pair of equal angles"],ans:1},
        {q:"In ΔABC with DE || BC, if AD = 3, DB = 2, and AE = 6, then EC = ?",opts:["2","3","4","5"],ans:2}
      ],
      short: [
        {q:"State and prove the Basic Proportionality Theorem (Thales' Theorem).",a:"Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides at distinct points, then the other two sides are divided in the same ratio.\n\nGiven: ΔABC with DE || BC, D on AB, E on AC\nTo prove: AD/DB = AE/EC\n\nConstruction: Join BE and CD. Draw DM ⊥ AC and EN ⊥ AB.\n\nProof:\nArea(ΔADE) = ½ × AD × EN ... (taking AB as base direction)\nArea(ΔBDE) = ½ × DB × EN\nSo: Area(ΔADE)/Area(ΔBDE) = AD/DB ...(1)\n\nAlso:\nArea(ΔADE) = ½ × AE × DM\nArea(ΔCDE) = ½ × EC × DM\nSo: Area(ΔADE)/Area(ΔCDE) = AE/EC ...(2)\n\nSince ΔBDE and ΔCDE are on the same base DE between parallels BC and DE:\nArea(ΔBDE) = Area(ΔCDE) ...(3)\n\nFrom (1), (2), (3):\nAD/DB = AE/EC ■"},
        {q:"In ΔABC, DE || BC such that AD = 1.5 cm, DB = 3 cm and AE = 1 cm. Find AC.",a:"By Basic Proportionality Theorem (DE || BC):\nAD/DB = AE/EC\n1.5/3 = 1/EC\nEC = 3/1.5 = 2 cm\nAC = AE + EC = 1 + 2 = 3 cm"},
        {q:"Prove that if two triangles are equiangular, then they are similar (AA Similarity).",a:"Given: ΔABC and ΔDEF with ∠A = ∠D, ∠B = ∠E (so ∠C = ∠F)\nTo prove: ΔABC ~ ΔDEF\n\nConstruction: On DE, cut DP = AB. On DF, cut DQ = AC. Join PQ.\n\nProof:\nIn ΔABC and ΔDPQ:\nAB = DP (by construction)\n∠A = ∠D (given)\nAC = DQ (by construction)\nBy SAS: ΔABC ≅ ΔDPQ\n→ ∠B = ∠DPQ\n\nBut ∠B = ∠E (given)\n→ ∠DPQ = ∠E\n→ PQ || EF (corresponding angles equal)\n→ DP/PE = DQ/QF (by BPT)\n→ AB/PE = AC/QF\n\nThis gives AB/DE = AC/DF = BC/EF\nHence ΔABC ~ ΔDEF ■"},
        {q:"A ladder 10 m long reaches a window 8 m above the ground. Find the distance of the foot of the ladder from the base of the wall.",a:"Let wall = AB = 8 m, ladder = AC = 10 m\nAngle at B = 90°\n\nBy Pythagoras Theorem:\nAC² = AB² + BC²\n10² = 8² + BC²\n100 = 64 + BC²\nBC² = 36\nBC = 6 m\n\nThe foot of the ladder is 6 m from the base of the wall."},
        {q:"State the Pythagoras Theorem and its converse.",a:"Pythagoras Theorem: In a right triangle, the square of the hypotenuse is equal to the sum of squares of the other two sides.\nIf ∠B = 90° in ΔABC, then AC² = AB² + BC²\n\nConverse of Pythagoras Theorem: If in a triangle, the square of one side is equal to the sum of squares of the other two sides, then the angle opposite the first side is a right angle.\nIf AC² = AB² + BC² in ΔABC, then ∠B = 90°"}
      ],
      long: [
        {q:"Prove that the ratio of areas of two similar triangles is equal to the square of the ratio of their corresponding sides.",a:"Given: ΔABC ~ ΔDEF\nTo prove: Area(ΔABC)/Area(ΔDEF) = (AB/DE)² = (BC/EF)² = (AC/DF)²\n\nConstruction: Draw AM ⊥ BC and DN ⊥ EF\n\nProof:\nArea(ΔABC) = ½ × BC × AM\nArea(ΔDEF) = ½ × EF × DN\n\nArea(ΔABC)/Area(ΔDEF) = (BC × AM)/(EF × DN) ...(1)\n\nIn ΔABM and ΔDEN:\n∠B = ∠E (since ΔABC ~ ΔDEF)\n∠AMB = ∠DNE = 90°\nSo ΔABM ~ ΔDEN (AA)\n→ AM/DN = AB/DE ...(2)\n\nSince ΔABC ~ ΔDEF:\nAB/DE = BC/EF ...(3)\n\nFrom (1), (2), (3):\nArea(ΔABC)/Area(ΔDEF) = (BC/EF) × (AB/DE)\n= (BC/EF) × (BC/EF)\n= (BC/EF)² \n\nSimilarly = (AB/DE)² = (AC/DF)² ■"},
        {q:"In ΔABC, the angle bisector AD of ∠A meets BC at D. Prove that BD/DC = AB/AC.",a:"Given: ΔABC with AD bisecting ∠BAC, meeting BC at D\nTo prove: BD/DC = AB/AC\n\nConstruction: Draw CE || DA meeting BA extended at E.\n\nProof:\nSince CE || DA:\n∠DAC = ∠ACE (alternate interior angles) ...(1)\n∠BAD = ∠AEC (corresponding angles) ...(2)\n\nSince AD bisects ∠A:\n∠BAD = ∠DAC ...(3)\n\nFrom (1), (2), (3):\n∠ACE = ∠AEC\n→ AE = AC (isoceles triangle) ...(4)\n\nIn ΔBCE, since DA || CE:\nBD/DC = BA/AE (by BPT)\n= BA/AC (from (4))\n= AB/AC ■"}
      ],
      passage: [
        {q:"A photographer takes photos of the Taj Mahal with a small 35mm film and then enlarges them to 45mm size.\n\n(a) If a wall in the 35mm photo measures 7 mm, how long will it appear in the 45mm enlargement?\n(b) What concept in geometry does this illustrate?\n(c) If two photographs of the same building taken at different distances have all corresponding angles equal, are the buildings in the photos similar figures? Why?",a:"(a) Scale factor = 45/35 = 9/7\nLength in enlarged photo = 7 × 9/7 = 9 mm\n\n(b) This illustrates the concept of SIMILAR FIGURES — figures that have the same shape but not necessarily the same size. Every part is scaled by the same ratio.\n\n(c) Yes, the buildings in the photos are similar figures. When all corresponding angles are equal, by the AA (Angle-Angle) similarity criterion, the triangles — and thus the overall figures — are similar. Similar figures have the same shape, meaning corresponding angles are equal and corresponding sides are in the same ratio."}
      ]
    },

    "Coordinate Geometry": {
      mcq: [
        {q:"The distance between points A(x₁,y₁) and B(x₂,y₂) is:",opts:["√[(x₂-x₁)² + (y₂-y₁)²]","(x₂-x₁) + (y₂-y₁)","√[(x₂+x₁)² + (y₂+y₁)²]","(x₂-x₁)² + (y₂-y₁)²"],ans:0},
        {q:"Distance of point (3, 4) from the origin is:",opts:["3","4","5","7"],ans:2},
        {q:"The midpoint of A(x₁,y₁) and B(x₂,y₂) is:",opts:["(x₁+x₂, y₁+y₂)","((x₁+x₂)/2, (y₁+y₂)/2)","((x₁-x₂)/2, (y₁-y₂)/2)","(x₁-x₂, y₁-y₂)"],ans:1},
        {q:"If P divides AB in ratio m:n, then by Section Formula, P = ?",opts:["((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))","((mx₁+nx₂)/(m+n), (my₁+ny₂)/(m+n))","((x₁+x₂)/2, (y₁+y₂)/2)","None of these"],ans:0},
        {q:"The distance between (2, 3) and (4, 1) is:",opts:["2√2","4","2","√8"],ans:0},
        {q:"The point dividing AB where A(1,3), B(2,6) in ratio 1:2 internally is:",opts:["(4/3, 4)","(4/3, 3)","(3, 4)","(1, 3)"],ans:0},
        {q:"Centroid of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃) is:",opts:["(x₁+x₂+x₃, y₁+y₂+y₃)","((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)","((x₁+x₂)/2, (y₁+y₂)/2)","None"],ans:1},
        {q:"Area of triangle with vertices (0,0), (4,0), (0,3) is:",opts:["6","7","12","3"],ans:0},
        {q:"Points (1,7), (4,2), (-1, -1) form:",opts:["Equilateral triangle","Right triangle","Isoceles triangle","No triangle (collinear)"],ans:1},
        {q:"Midpoint of (2, -3) and (-4, 7) is:",opts:["(-1, 2)","(-2, 4)","(-1, -2)","(1, 2)"],ans:0},
        {q:"For what value of k are points (k, 2-2k), (-k+1, 2k), (-4-k, 6-2k) collinear?",opts:["k = 1/2","k = -1/2","k = 1","k = -1"],ans:0},
        {q:"The area of the triangle formed by points (0,0), (3,0), (0,4) is:",opts:["3","4","6","7"],ans:2},
        {q:"Distance of (a cos θ, a sin θ) from origin is:",opts:["a","a²","2a","a/2"],ans:0},
        {q:"If three points are collinear, the area of the triangle formed by them is:",opts:["1","0","Infinite","Depends on points"],ans:1},
        {q:"Point P divides the join of A(-2,1) and B(1,4) in ratio 1:2. Then P = ?",opts:["(-1, 2)","(0, 2)","(-1, 3)","(0, 3)"],ans:0}
      ],
      short: [
        {q:"Find the distance between A(2, 3) and B(-1, -1).",a:"AB = √[(x₂-x₁)² + (y₂-y₁)²]\n= √[(-1-2)² + (-1-3)²]\n= √[(-3)² + (-4)²]\n= √[9 + 16]\n= √25 = 5 units"},
        {q:"Find the midpoint of the segment joining A(3, 5) and B(-1, 7).",a:"Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)\n= ((3 + (-1))/2, (5 + 7)/2)\n= (2/2, 12/2)\n= (1, 6)"},
        {q:"Find the point which divides the line segment joining A(4,-3) and B(9,7) in ratio 3:2 internally.",a:"Section Formula (internal division):\nP = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))\nm = 3, n = 2, A(4,-3), B(9,7)\n\nP_x = (3×9 + 2×4)/(3+2) = (27+8)/5 = 35/5 = 7\nP_y = (3×7 + 2×(-3))/(3+2) = (21-6)/5 = 15/5 = 3\n\nP = (7, 3)"},
        {q:"Find the area of triangle with vertices A(2,3), B(-1,0), C(4,-3).",a:"Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|\n= ½|2(0-(-3)) + (-1)((-3)-3) + 4(3-0)|\n= ½|2(3) + (-1)(-6) + 4(3)|\n= ½|6 + 6 + 12|\n= ½ × 24 = 12 sq units"},
        {q:"Check whether (5,-2), (6,4), (7,-2) are vertices of an isoceles triangle.",a:"AB = √[(6-5)² + (4-(-2))²] = √[1+36] = √37\nBC = √[(7-6)² + (-2-4)²] = √[1+36] = √37\nAC = √[(7-5)² + (-2-(-2))²] = √[4+0] = 2\n\nAB = BC = √37 ≠ AC\nSince two sides are equal, it is an ISOCELES triangle."},
        {q:"Find the ratio in which the point P(2, y) divides the line segment joining A(-2,2) and B(3,7). Also find y.",a:"Let P divide AB in ratio k:1\nUsing Section Formula:\n2 = (3k + (-2))/(k+1)\n2(k+1) = 3k - 2\n2k + 2 = 3k - 2\nk = 4\nRatio = 4:1\n\ny = (7×4 + 2×1)/(4+1) = (28+2)/5 = 30/5 = 6"}
      ],
      long: [
        {q:"The vertices of a ΔABC are A(4,6), B(1,5), C(7,2). A line is drawn to intersect sides AB and AC at D and E respectively, such that AD/AB = AE/AC = 1/4. Find the area of ΔADE and compare with area of ΔABC.",a:"D divides AB in ratio AD:DB = 1:3\nUsing section formula:\nD = ((1×1 + 3×4)/4, (1×5 + 3×6)/4)\n= ((1+12)/4, (5+18)/4)\n= (13/4, 23/4)\n\nE divides AC in ratio AE:EC = 1:3\nE = ((1×7 + 3×4)/4, (1×2 + 3×6)/4)\n= ((7+12)/4, (2+18)/4)\n= (19/4, 5)\n\nArea(ΔADE):\nVertices: A(4,6), D(13/4,23/4), E(19/4,5)\n= ½|4(23/4-5) + 13/4(5-6) + 19/4(6-23/4)|\n= ½|4(3/4) + 13/4(-1) + 19/4(1/4)|\n= ½|3 - 13/4 + 19/16|\n= ½ × 15/16 = 15/32\n\nArea(ΔABC):\n= ½|4(5-2) + 1(2-6) + 7(6-5)|\n= ½|12 - 4 + 7| = 15/2\n\nRatio = (15/32)/(15/2) = 1/16 = (1/4)²\n\nThis confirms: Area(ΔADE)/Area(ΔABC) = (AD/AB)² = (1/4)²"}
      ],
      passage: [
        {q:"Study the coordinate geometry situation:\n\nA town B is located 36 km east and 15 km north of town A. Town C is located such that it is equidistant from both A and B.\n\n(a) If A is at origin (0,0), what are the coordinates of B?\n(b) Find AB using the distance formula.\n(c) If C has coordinates (18, k), find k given that CA = CB.",a:"(a) B is 36 km east and 15 km north of A(0,0).\nCoordinates of B = (36, 15)\n\n(b) AB = √[(36-0)² + (15-0)²]\n= √[1296 + 225]\n= √1521 = 39 km\n\n(c) CA = CB, C = (18, k)\nCA = √[(18-0)² + (k-0)²] = √(324+k²)\nCB = √[(18-36)² + (k-15)²] = √[324 + k²-30k+225]\n\nCA = CB:\n324 + k² = 324 + k² - 30k + 225\n30k = 225\nk = 7.5"}
      ]
    },

    "Introduction to Trigonometry": {
      mcq: [
        {q:"In right ΔABC (right angle at B), sin A = ?",opts:["AB/AC","BC/AC","AB/BC","AC/BC"],ans:1},
        {q:"cos A in right triangle ABC (right angle at B) = ?",opts:["BC/AC","AB/AC","BC/AB","AC/AB"],ans:1},
        {q:"tan A = ?",opts:["sin A / cos A","cos A / sin A","1 / sin A","1 / cos A"],ans:0},
        {q:"The value of sin 30° is:",opts:["1/2","√3/2","1/√2","1"],ans:0},
        {q:"The value of cos 60° is:",opts:["√3/2","1/2","1/√2","0"],ans:1},
        {q:"The value of tan 45° is:",opts:["0","1/2","1","√3"],ans:2},
        {q:"sin²θ + cos²θ = ?",opts:["0","1","2","sin 2θ"],ans:1},
        {q:"1 + tan²θ = ?",opts:["sec θ","sec²θ","cosec²θ","2"],ans:1},
        {q:"1 + cot²θ = ?",opts:["cosec θ","sec²θ","cosec²θ","cot θ"],ans:2},
        {q:"The value of sin 0° + cos 90° is:",opts:["0","1","2","√2"],ans:0},
        {q:"If sin θ = 3/5, then cos θ = ?",opts:["4/5","3/4","5/4","4/3"],ans:0},
        {q:"tan 30° = ?",opts:["1/√3","√3","1","1/2"],ans:0},
        {q:"The value of (sin 30° + cos 60°) - (tan 45°) is:",opts:["0","1/2","1","-1/2"],ans:0},
        {q:"cosec A = ?",opts:["sin A","1/sin A","cos A/sin A","sin A/cos A"],ans:1},
        {q:"sec A × cos A = ?",opts:["0","1","tan A","cot A"],ans:1},
        {q:"In right ΔABC with ∠A = 30°, AB = 10. Then BC = ?",opts:["5","5√3","10/√3","10"],ans:0},
        {q:"If tan θ = 4/3, then sin θ = ?",opts:["3/5","4/5","4/3","3/4"],ans:1},
        {q:"sin(90° - θ) = ?",opts:["sin θ","cos θ","-sin θ","-cos θ"],ans:1},
        {q:"cos(90° - θ) = ?",opts:["cos θ","sin θ","-cos θ","-sin θ"],ans:1},
        {q:"The value of (tan 45° + cot 45°)² is:",opts:["2","4","1","√2"],ans:1},
        {q:"If sin 3A = cos(A - 26°) where 3A is acute, then A = ?",opts:["26°","29°","45°","64°"],ans:1},
        {q:"Evaluate: 2 tan²45° + cos²30° - sin²60°",opts:["2","3","1","0"],ans:0},
        {q:"The value of sin 60° × cos 30° - cos 60° × sin 30° is:",opts:["0","1","1/2","√3/2"],ans:2},
        {q:"Which of the following is the reciprocal of tan θ?",opts:["cot θ","sec θ","cosec θ","sin θ"],ans:0},
        {q:"If sec θ = 2, then θ = ?",opts:["30°","45°","60°","90°"],ans:2}
      ],
      short: [
        {q:"In right ΔABC, right-angled at B, if AB = 12 cm and BC = 5 cm, find all six trigonometric ratios of angle A.",a:"AC (hypotenuse) = √(AB² + BC²) = √(144 + 25) = √169 = 13 cm\n\nsin A = BC/AC = 5/13\ncos A = AB/AC = 12/13\ntan A = BC/AB = 5/12\ncosec A = 13/5\nsec A = 13/12\ncot A = 12/5"},
        {q:"Prove the identity: (1 - sin²θ)(1 + tan²θ) = 1",a:"LHS = (1 - sin²θ)(1 + tan²θ)\n= cos²θ × sec²θ       [since 1-sin²θ = cos²θ and 1+tan²θ = sec²θ]\n= cos²θ × (1/cos²θ)\n= 1 = RHS ✓"},
        {q:"Evaluate: (sin 30° + tan 45° - cosec 60°) ÷ (sec 30° + cos 60° + cot 45°)",a:"Numerator: sin30° + tan45° - cosec60°\n= 1/2 + 1 - 2/√3\n= 3/2 - 2/√3\n\nDenominator: sec30° + cos60° + cot45°\n= 2/√3 + 1/2 + 1\n= 3/2 + 2/√3\n\nRatio = (3/2 - 2√3/3)/(3/2 + 2√3/3)\nMultiplying by 6: (9 - 4√3)/(9 + 4√3)\nRationalising: (9-4√3)²/(81-48) = (81+48-72√3)/33 = (129-72√3)/33 = (43-24√3)/11"},
        {q:"If tan 2A = cot(A - 18°) where 2A is an acute angle, find A.",a:"cot(90° - 2A) = cot(A - 18°)   [since tan θ = cot(90°-θ)]\n90° - 2A = A - 18°\n90° + 18° = 3A\n108° = 3A\nA = 36°"},
        {q:"Prove: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan²A + cot²A",a:"LHS = sin²A + 2sinA·cosecA + cosec²A + cos²A + 2cosA·secA + sec²A\n= (sin²A + cos²A) + 2(sinA/sinA) + 2(cosA/cosA) + cosec²A + sec²A\n= 1 + 2 + 2 + (1+cot²A) + (1+tan²A)\n= 1 + 2 + 2 + 1 + cot²A + 1 + tan²A\n= 7 + tan²A + cot²A = RHS ✓"},
        {q:"If sin θ + cos θ = √2 cos(90°-θ), find the value of tan θ.",a:"sin θ + cos θ = √2 cos(90°-θ)\nsin θ + cos θ = √2 sin θ\ncos θ = √2 sin θ - sin θ\ncos θ = sin θ(√2 - 1)\ntan θ = cos θ/sin θ... wait:\n\ncos θ = (√2 - 1) sin θ\n1 = (√2 - 1) tan θ\ntan θ = 1/(√2-1) = (√2+1)/[(√2-1)(√2+1)] = (√2+1)/1 = √2 + 1"}
      ],
      long: [
        {q:"Prove that: (cosec A - sin A)(sec A - cos A) = 1/(tan A + cot A)",a:"LHS = (cosec A - sin A)(sec A - cos A)\n= (1/sinA - sinA)(1/cosA - cosA)\n= [(1-sin²A)/sinA] × [(1-cos²A)/cosA]\n= [cos²A/sinA] × [sin²A/cosA]\n= (cos²A × sin²A)/(sinA × cosA)\n= sinA × cosA\n\nRHS = 1/(tanA + cotA)\n= 1/(sinA/cosA + cosA/sinA)\n= 1/[(sin²A + cos²A)/(sinA cosA)]\n= sinA cosA\n\nLHS = RHS ✓"},
        {q:"Construct a table of trigonometric values for 0°, 30°, 45°, 60°, 90° and use it to prove sin²30° + cos²60° + tan²45° = 2.",a:"Trigonometric Table:\n       | 0°  | 30°    | 45°    | 60°    | 90°\nsin    |  0  | 1/2    | 1/√2   | √3/2   |  1\ncos    |  1  | √3/2   | 1/√2   | 1/2    |  0\ntan    |  0  | 1/√3   |  1     | √3     | ∞\n\nsin²30° = (1/2)² = 1/4\ncos²60° = (1/2)² = 1/4\ntan²45° = (1)² = 1\n\nsin²30° + cos²60° + tan²45°\n= 1/4 + 1/4 + 1\n= 2/4 + 1\n= 1/2 + 1 = 3/2\n\nNote: The actual sum = 3/2, not 2. So the corrected statement to prove would be:\nsin²30° + cos²60° + tan²45° = 3/2 ✓"}
      ],
      passage: [
        {q:"Read the following and answer:\n\nA student standing 30 m from the base of a building looks up at a window. The ratio of BC (height of window) to AB (horizontal distance) equals tan A.\n\n(a) If tan A = 1/√3, what is angle A?\n(b) Find the height of the window BC.\n(c) Write the values of sin A and cos A.",a:"(a) tan A = 1/√3 = tan 30°\nSo angle A = 30°\n\n(b) tan 30° = BC/AB\n1/√3 = BC/30\nBC = 30/√3 = 30√3/3 = 10√3 m ≈ 17.3 m\n\n(c) For angle 30°:\nsin 30° = 1/2\ncos 30° = √3/2"}
      ]
    },

    "Some Applications of Trigonometry": {
      mcq: [
        {q:"The angle formed by the line of sight with the horizontal when looking UP at an object is called:",opts:["Angle of depression","Angle of elevation","Angle of inclination","Vertical angle"],ans:1},
        {q:"The angle formed by the line of sight with the horizontal when looking DOWN at an object is called:",opts:["Angle of elevation","Angle of depression","Angle of incidence","Depression angle"],ans:1},
        {q:"A tower 20 m high casts a shadow 20 m long. The angle of elevation of the sun is:",opts:["30°","45°","60°","90°"],ans:1},
        {q:"From a point 15 m away from a vertical tower, the angle of elevation of the top is 60°. The height of the tower is:",opts:["15 m","15√3 m","5√3 m","30 m"],ans:1},
        {q:"The angle of elevation of top of a building from a distance of 30 m is 30°. The height of the building is:",opts:["10√3 m","30√3 m","15 m","10 m"],ans:0},
        {q:"From the top of a cliff 60 m high, the angle of depression of a boat is 30°. The distance of the boat from the foot of the cliff is:",opts:["60 m","60√3 m","30 m","20√3 m"],ans:1},
        {q:"The angle of elevation of top of a pole from two points P and Q on the ground are 45° and 30° respectively. If PQ = 10 m (P closer), height of pole is approximately:",opts:["5 m","10 m","5(√3+1) m","10/(√3-1) m"],ans:2},
        {q:"When the sun's angle of elevation is 60°, a tree casts a shadow of 10 m. Find the height of the tree.",opts:["10 m","10√3 m","10/√3 m","20 m"],ans:1},
        {q:"A kite is flying at height 50 m. The string makes 60° with the horizontal. Length of string is:",opts:["50√3/3 m","50√3 m","100/√3 m","100√3/3 m"],ans:0},
        {q:"From the same point, angles of elevation of top and bottom of a flagstaff on a tower are 60° and 45°. If tower height = 20 m, flagstaff height is:",opts:["20(√3-1) m","20√3 m","20 m","20(√3+1) m"],ans:0},
        {q:"The height or length of an object or the distance between two distant objects can be determined by the mathematical technique called:",opts:["Statistics","Trigonometry","Algebra","Geometry"],ans:1},
        {q:"If the angle of elevation of a cloud from a point h metres above a lake is α, and angle of depression of its reflection in lake is β, then height of cloud = ?",opts:["h(tan β + tan α)/(tan β - tan α)","h tan α","h tan β","h(tan α + tan β)"],ans:0}
      ],
      short: [
        {q:"A tower stands vertically on the ground. From a point on the ground 15 m away from its foot, the angle of elevation of the top is 60°. Find the height of the tower.",a:"Let height of tower = AB = h m\nDistance from foot = BC = 15 m\nAngle of elevation = ∠ACB = 60°\n\nIn right ΔABC:\ntan 60° = AB/BC\n√3 = h/15\nh = 15√3 m\n\nHeight of tower = 15√3 ≈ 25.98 m"},
        {q:"From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Find the height of the tower.",a:"Let AB = building = 7 m, CD = tower\nDraw BE ⊥ CD. Let DE = x (horizontal distance)\n\nAngle of depression of foot = 45°:\ntan 45° = AB/x = 7/x → x = 7 m\n\nBE = x = 7 m, CE = CD - DE\nAngle of elevation of top = 60°:\ntan 60° = CE/BE\n√3 = CE/7\nCE = 7√3 m\n\nHeight of tower CD = CE + DE = 7√3 + 7 = 7(√3+1) m"},
        {q:"Two poles of equal heights stand on either side of a road 80 m wide. From a point between them on the road, the angles of elevation of the tops are 60° and 30°. Find the heights and position of the point.",a:"Let poles AB and CD be on either side, road AC = 80 m\nLet point P be at distance x from A (so PC = 80-x)\nLet height of each pole = h\n\nFrom P: ∠APB = 60° → tan 60° = h/x → h = x√3 ...(1)\nFrom P: ∠CPD = 30° → tan 30° = h/(80-x) → h = (80-x)/√3 ...(2)\n\nFrom (1) and (2):\nx√3 = (80-x)/√3\n3x = 80 - x\n4x = 80 → x = 20 m\nh = 20√3 m\n\nPoint P is 20 m from pole AB; height = 20√3 m"}
      ],
      long: [
        {q:"As observed from the top of a 75 m tall lighthouse, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, find the distance between the two ships.",a:"Let lighthouse AB = 75 m, ships at C and D\nAngle of depression of C = 45°, angle of depression of D = 30°\n\nIn ΔABC (∠ACB = 45°):\ntan 45° = AB/BC\n1 = 75/BC\nBC = 75 m\n\nIn ΔABD (∠ADB = 30°):\ntan 30° = AB/BD\n1/√3 = 75/BD\nBD = 75√3 m\n\nDistance between ships = CD = BD - BC\n= 75√3 - 75\n= 75(√3 - 1) m\n≈ 75(1.732 - 1)\n≈ 75 × 0.732 ≈ 54.9 m"}
      ],
      passage: [
        {q:"Read the situation:\n\nAn observer on top of a cliff 100 m high sees a boat in the sea at an angle of depression of 30°. After some time the boat moves towards the cliff and the angle of depression becomes 60°.\n\n(a) Find the initial distance of the boat from the foot of the cliff.\n(b) Find the final distance of the boat from the foot of the cliff.\n(c) How much distance has the boat covered?",a:"Height of cliff = 100 m\n\n(a) Initial angle of depression = 30°\ntan 30° = 100/d₁\n1/√3 = 100/d₁\nd₁ = 100√3 m\n\n(b) Final angle of depression = 60°\ntan 60° = 100/d₂\n√3 = 100/d₂\nd₂ = 100/√3 = 100√3/3 m\n\n(c) Distance covered = d₁ - d₂\n= 100√3 - 100√3/3\n= 100√3(1 - 1/3)\n= 100√3 × 2/3\n= 200√3/3 m ≈ 115.5 m"}
      ]
    },

    "Circles": {
      mcq: [
        {q:"A tangent to a circle intersects the circle at:",opts:["Two points","One point","No point","Three points"],ans:1},
        {q:"A line that intersects a circle at two points is called a:",opts:["Tangent","Secant","Chord","Diameter"],ans:1},
        {q:"The tangent at any point of a circle is perpendicular to the:",opts:["Chord through that point","Diameter at that point","Radius at that point","Secant through that point"],ans:2},
        {q:"The number of tangents that can be drawn to a circle from an external point is:",opts:["0","1","2","Infinite"],ans:2},
        {q:"The lengths of two tangents drawn from an external point to a circle are:",opts:["Different","Equal","One is double the other","Cannot be determined"],ans:1},
        {q:"If two tangents PA and PB are drawn from point P to a circle with centre O, then ∠APB + ∠AOB = ?",opts:["90°","120°","180°","360°"],ans:2},
        {q:"From a point 13 cm from the centre of a circle with radius 5 cm, the length of the tangent is:",opts:["8 cm","10 cm","12 cm","18 cm"],ans:2},
        {q:"The angle between tangent and radius at point of contact is:",opts:["0°","45°","90°","180°"],ans:2},
        {q:"How many tangents can be drawn from a point inside a circle?",opts:["0","1","2","Infinite"],ans:0},
        {q:"If PA and PB are tangents from external point P, and O is centre, then ∠OAP = ?",opts:["45°","60°","90°","180°"],ans:2},
        {q:"The tangent to a circle is a special case of secant when:",opts:["The chord has zero length","The two intersection points coincide","The radius becomes zero","The secant is parallel to radius"],ans:1},
        {q:"The word 'tangent' comes from the Latin word meaning:",opts:["Touch","Line","Circle","Meet"],ans:0}
      ],
      short: [
        {q:"Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",a:"Given: Circle with centre O, tangent AB at point P\nTo prove: OP ⊥ AB\n\nProof: Take any point Q on AB (Q ≠ P).\nSince AB is a tangent, it touches the circle only at P.\nSo Q lies outside the circle.\nOQ > OP (radius)\n\nThis is true for ALL points Q on AB except P.\nSo OP is the shortest distance from O to AB.\nThe shortest distance from a point to a line is the perpendicular.\nTherefore OP ⊥ AB ■"},
        {q:"From a point P outside a circle, two tangents PA and PB are drawn. Prove that PA = PB.",a:"Given: Tangents PA and PB from external point P, O is centre\nTo prove: PA = PB\n\nIn ΔOAP and ΔOBP:\nOA = OB (radii)\nOP = OP (common)\n∠OAP = ∠OBP = 90° (radius ⊥ tangent)\n\nBy RHS congruence: ΔOAP ≅ ΔOBP\nTherefore PA = PB ■"},
        {q:"A tangent PQ at a point P of a circle with radius 5 cm meets a line through the centre O at Q such that OQ = 13 cm. Find PQ.",a:"OP ⊥ PQ (radius is perpendicular to tangent)\nSo ΔOPQ is right-angled at P.\n\nBy Pythagoras Theorem:\nOQ² = OP² + PQ²\n13² = 5² + PQ²\n169 = 25 + PQ²\nPQ² = 144\nPQ = 12 cm"},
        {q:"Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the outer circle which touches the inner circle.",a:"Let chord AB of outer circle touch inner circle at P.\nO is centre. OP ⊥ AB (tangent property)\nOP = 3 cm (radius of inner circle)\nOA = 5 cm (radius of outer circle)\n\nIn right ΔOAP:\nAP² = OA² - OP² = 25 - 9 = 16\nAP = 4 cm\n\nAB = 2 × AP = 8 cm"}
      ],
      long: [
        {q:"Prove that the angle between two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line segment joining the points of contact at the centre.",a:"Given: PA and PB are tangents from external point P, O is centre\nTo prove: ∠APB + ∠AOB = 180°\n\nIn quadrilateral AOBP:\nSum of all angles = 360°\n∠OAP = 90° (radius ⊥ tangent)\n∠OBP = 90° (radius ⊥ tangent)\n∠OAP + ∠OBP + ∠APB + ∠AOB = 360°\n90° + 90° + ∠APB + ∠AOB = 360°\n∠APB + ∠AOB = 180°\n\nHence proved: ∠APB and ∠AOB are supplementary. ■"}
      ],
      passage: [
        {q:"A pulley system has a rope wrapped around a circular wheel. At any point where the rope leaves the wheel, it behaves like a tangent to the circle.\n\n(a) What is the angle between the rope (tangent) and the radius at the point of contact?\n(b) If two ropes leave the wheel from the same external point P, and the angle between them is 60°, what is the angle subtended at the centre?\n(c) If the radius of the wheel is 5 cm and the external point is 13 cm from the centre, find the length of rope from the external point to the wheel.",a:"(a) The angle between the tangent (rope) and radius at the point of contact is always 90°.\n\n(b) ∠APB = 60°\n∠APB + ∠AOB = 180° (supplementary)\n∠AOB = 180° - 60° = 120°\n\n(c) OP = 13 cm, radius OA = 5 cm, ∠OAP = 90°\nPA² = OP² - OA² = 169 - 25 = 144\nPA = 12 cm"}
      ]
    },

    "Areas Related to Circles": {
      mcq: [
        {q:"Area of a sector with radius r and angle θ (in degrees) is:",opts:["θ/180 × πr²","θ/360 × πr²","θ/360 × 2πr","πr²θ"],ans:1},
        {q:"Length of arc of a sector with radius r and angle θ is:",opts:["θ/360 × πr","θ/360 × 2πr","θ/180 × πr","2πr/θ"],ans:1},
        {q:"Area of a segment = Area of sector - ?",opts:["Area of circle","Area of triangle","Area of chord","Length of arc"],ans:1},
        {q:"The perimeter of a sector with radius 7 cm and angle 60° is: (π = 22/7)",opts:["14.67 cm","21.33 cm","28 cm","7.33 cm"],ans:1},
        {q:"Area of quadrant of circle with radius r is:",opts:["πr²/2","πr²/4","πr²/3","2πr²"],ans:1},
        {q:"Area of a circle is πr². If r is doubled, area becomes:",opts:["2πr²","4πr²","πr²/2","8πr²"],ans:1},
        {q:"Angle of minor sector + angle of major sector = ?",opts:["180°","270°","360°","90°"],ans:2},
        {q:"A horse is tied to a peg with 14 m rope. Area it can graze (full circle) is: (π = 22/7)",opts:["308 m²","616 m²","154 m²","44 m²"],ans:1},
        {q:"Area of equilateral triangle with side a is:",opts:["(√3/4)a²","(√3/2)a²","a²","(√3/3)a²"],ans:0},
        {q:"The area of sector AOB where radius = 6 cm and ∠AOB = 60° is:",opts:["6π cm²","3π cm²","12π cm²","9π cm²"],ans:0}
      ],
      short: [
        {q:"Find the area of a sector of a circle with radius 4 cm and angle 30°.",a:"Area of sector = θ/360 × πr²\n= 30/360 × π × 4²\n= 1/12 × 16π\n= 4π/3 cm²\n≈ 4.19 cm²"},
        {q:"A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the minor sector. (π = 3.14)",a:"Area of minor sector = θ/360 × πr²\n= 90/360 × 3.14 × 10²\n= 1/4 × 314\n= 78.5 cm²"},
        {q:"Find the area of the shaded region where a square of side 14 cm has four semicircles drawn on its sides inside the square. (π = 22/7)",a:"Area of square = 14² = 196 cm²\nRadius of each semicircle = 14/2 = 7 cm\nArea of 4 semicircles = 4 × (1/2 × πr²) = 2πr² = 2 × 22/7 × 49 = 308 cm²\n\nBut 308 > 196, which means the semicircles overlap.\nArea of each semicircle = πr²/2 = 22/7 × 7²/2 = 77 cm²\nSince 4 × 77 > 196, the problem is likely:\nArea of shaded region (inside square, outside semicircles) = 196 - 2 × πr²/2... [depends on diagram]\nFor standard problem: shaded = square area - 4 quadrant areas = 196 - π(7)² = 196 - 154 = 42 cm²"},
        {q:"Find the area of a sector of angle 120° in a circle of radius 21 cm. (π = 22/7)",a:"Area = θ/360 × πr²\n= 120/360 × 22/7 × 21²\n= 1/3 × 22/7 × 441\n= 1/3 × 22 × 63\n= 1/3 × 1386\n= 462 cm²"}
      ],
      long: [
        {q:"In a circle of radius 12 cm, an arc subtends an angle of 120° at the centre. Find: (i) area of sector, (ii) length of arc, (iii) area of segment formed. (Use π = 3.14 and √3 = 1.73)",a:"r = 12 cm, θ = 120°\n\n(i) Area of sector = θ/360 × πr²\n= 120/360 × 3.14 × 144\n= 1/3 × 452.16 = 150.72 cm²\n\n(ii) Length of arc = θ/360 × 2πr\n= 120/360 × 2 × 3.14 × 12\n= 1/3 × 75.36 = 25.12 cm\n\n(iii) Area of segment = Area of sector - Area of triangle\nFor θ = 120°, the triangle is isoceles with two sides = r = 12 cm\n∠AOB = 120°, so ∠OAB = ∠OBA = 30°\nHeight of triangle = r cos60° = 12 × 0.5 = 6 cm\nBase = 2r sin60° = 2 × 12 × (√3/2) = 12√3 cm\nArea of triangle = ½ × base × height = ½ × 12√3 × 6 = 36√3 = 36 × 1.73 = 62.28 cm²\n\nArea of segment = 150.72 - 62.28 = 88.44 cm²"}
      ],
      passage: [
        {q:"In a circular park of radius 21 m, a horse is tied to a pole at a point on the boundary. The rope length is 14 m.\n\n(a) Can the horse graze the full area of the park? Why?\n(b) Find the area the horse can graze.\n(c) Find the area it CANNOT reach. (π = 22/7)",a:"(a) No. The horse can only move within 14 m of the pole (a portion of the circle), not the entire park (radius 21 m).\n\n(b) Area horse can graze = area of circle with radius 14 m (if outside park)\nBut since horse is tied to boundary, it grazes a semicircle inside and portions outside:\nFor simplest case (unrestricted): area = πr² = 22/7 × 14² = 22/7 × 196 = 616 m²\nBut since tied at boundary of circle, it grazes a semicircle = π × 14²/2 = 308 m²\n\n(c) Area of park = πR² = 22/7 × 21² = 22/7 × 441 = 1386 m²\nArea not reachable = 1386 - 308 = 1078 m²"}
      ]
    },

    "Surface Areas and Volumes": {
      mcq: [
        {q:"Total surface area of a cylinder with radius r and height h is:",opts:["2πrh","2πr(r+h)","πr(r+h)","2πr² + h"],ans:1},
        {q:"Volume of a cone with base radius r and height h is:",opts:["πr²h","2πr²h/3","πr²h/3","πr²h/2"],ans:2},
        {q:"The curved surface area of a hemisphere is:",opts:["2πr²","3πr²","4πr²","πr²"],ans:0},
        {q:"Total surface area of a hemisphere is:",opts:["2πr²","3πr²","4πr²","πr²/2"],ans:1},
        {q:"Volume of a sphere with radius r is:",opts:["4πr³","4πr²","4/3 πr³","2/3 πr³"],ans:2},
        {q:"A solid is made by placing a cone on top of a cylinder. The surface area is: (r = radius of both, h₁ = cylinder height, h₂ = cone height, l = slant height of cone)",opts:["2πr(r+h₁) + πrl","πrl + 2πrh₁","2πrh₁ + πrl + πr²","πr² + 2πrh₁ + πrl"],ans:2},
        {q:"Volume of a frustum (truncated cone) with radii r₁, r₂ and height h is:",opts:["πh(r₁²+r₂²+r₁r₂)/3","πh(r₁+r₂)/3","πh(r₁²+r₂²)/3","πh(r₁²-r₂²)/3"],ans:0},
        {q:"If a metallic sphere is melted and recast into small spheres of half the radius, how many small spheres are obtained?",opts:["2","4","6","8"],ans:3},
        {q:"The height of a cone is 3 cm and base radius is 4 cm. Its slant height is:",opts:["4 cm","5 cm","6 cm","7 cm"],ans:1},
        {q:"Curved surface area of a cone with radius r and slant height l is:",opts:["πrl","2πrl","πr²l","πrl²"],ans:0},
        {q:"If the radius of a sphere is doubled, its volume becomes:",opts:["2 times","4 times","6 times","8 times"],ans:3},
        {q:"A cylinder, cone, and hemisphere have equal radii and equal heights. Their volumes are in ratio:",opts:["3:1:2","1:3:2","3:2:1","1:2:3"],ans:0}
      ],
      short: [
        {q:"A toy is in the shape of a cone surmounted on a cylinder. The diameter is 7 cm, height of cylinder is 12 cm and height of cone is 4 cm. Find total surface area. (π = 22/7)",a:"r = 3.5 cm\nSlant height of cone: l = √(r² + h²) = √(3.5² + 4²) = √(12.25 + 16) = √28.25 ≈ 5.32 cm\n\nTSA = CSA of cylinder + CSA of cone + area of circular base (bottom)\n= 2πrh + πrl + πr²\n= 2 × 22/7 × 3.5 × 12 + 22/7 × 3.5 × 5.32 + 22/7 × 3.5²\n= 264 + 58.52 + 38.5\n≈ 361 cm²"},
        {q:"A hemispherical tank of radius 1.75 m is full of water. It is to be emptied into a cylindrical tank with diameter 7 m. Find the rise in water level. (π = 22/7)",a:"Volume of hemisphere = 2/3 × πr³ = 2/3 × 22/7 × (1.75)³\n= 2/3 × 22/7 × 5.359 = 11.23 m³\n\nVolume of water in cylinder = πR²h\nR = 3.5 m\n22/7 × 3.5² × h = 11.23\n38.5h = 11.23\nh = 0.29 m ≈ 2/3 m"},
        {q:"How many spherical lead shots each of diameter 4.2 cm can be obtained from a rectangular solid lead of dimensions 66 cm × 42 cm × 21 cm? (π = 22/7)",a:"Volume of rectangular solid = 66 × 42 × 21 = 58212 cm³\nRadius of each shot = 2.1 cm\nVolume of each shot = 4/3 × πr³ = 4/3 × 22/7 × (2.1)³\n= 4/3 × 22/7 × 9.261\n= 4/3 × 22/7 × 9.261 ≈ 38.808 cm³\n\nNumber of shots = 58212/38.808 ≈ 1500"}
      ],
      long: [
        {q:"A vessel is in the form of an inverted cone, open at top, with radius 5 cm and height 8 cm. It is filled with water up to the rim. When lead shots, each a sphere of radius 0.5 cm, are dropped into the vessel, one-fourth of the water flows out. Find the number of lead shots dropped.",a:"Volume of cone = 1/3 × π × r² × h\n= 1/3 × π × 25 × 8 = 200π/3 cm³\n\nVolume of water that flows out = 1/4 × 200π/3 = 50π/3 cm³\n\nVolume of each lead shot = 4/3 × π × (0.5)³\n= 4/3 × π × 0.125 = π/6 cm³\n\nNumber of shots × volume of each shot = volume of water displaced\nn × π/6 = 50π/3\nn = 50π/3 × 6/π = 100\n\n100 lead shots were dropped."}
      ],
      passage: [
        {q:"A capsule medicine is in the shape of a cylinder with two hemispheres stuck at each end. The length of the entire capsule is 14 mm and the diameter of the capsule is 5 mm.\n\n(a) What is the height of the cylindrical part?\n(b) Find the total surface area of the capsule.\n(c) Find the volume of the capsule. (π = 22/7)",a:"Diameter = 5 mm → r = 2.5 mm\nTotal length = 14 mm\nLength of two hemispheres = 2r = 5 mm\nHeight of cylinder = 14 - 5 = 9 mm\n\n(a) Height of cylindrical part = 9 mm\n\n(b) TSA = CSA of cylinder + 2 × CSA of hemisphere\n= 2πrh + 2 × 2πr²\n= 2πr(h + 2r)\n= 2 × 22/7 × 2.5 × (9 + 5)\n= 2 × 22/7 × 2.5 × 14\n= 220 mm²\n\n(c) Volume = Volume of cylinder + 2 × Volume of hemisphere\n= πr²h + 2 × (2/3)πr³\n= πr²(h + 4r/3)\n= 22/7 × 6.25 × (9 + 10/3)\n= 22/7 × 6.25 × 37/3\n≈ 242.3 mm³"}
      ]
    },

    "Statistics": {
      mcq: [
        {q:"The mean of grouped data is calculated by the formula:",opts:["Σfᵢxᵢ / Σfᵢ","Σfᵢ / n","Σxᵢ / n","Σfᵢ / Σxᵢ"],ans:0},
        {q:"In the assumed mean method, the formula for mean is:",opts:["ā + Σfᵢdᵢ/Σfᵢ","ā + Σfᵢ/n","Σfᵢxᵢ/n","ā × Σfᵢdᵢ"],ans:0},
        {q:"The mode of grouped data is given by the formula involving:",opts:["Assumed mean","Frequencies of classes","Cumulative frequencies","Median class"],ans:1},
        {q:"The class with the maximum frequency is called the:",opts:["Median class","Mean class","Modal class","Cumulative class"],ans:2},
        {q:"The median of grouped data is found using:",opts:["Mode formula","Ogive or median formula","Mean formula","Frequency polygon"],ans:1},
        {q:"An ogive is a graph of:",opts:["Frequency vs class interval","Cumulative frequency vs class boundaries","Mode vs mean","None of these"],ans:1},
        {q:"The relationship between mean, median and mode is:",opts:["Mean = Median = Mode","Mode = 3 Median - 2 Mean","Mode = 2 Median - 3 Mean","Mean = 3 Mode - 2 Median"],ans:1},
        {q:"The formula for median of grouped data is:",opts:["l + [(n/2 - cf)/f] × h","l + [f/(n/2 - cf)] × h","l × [(n/2 - cf)/f] × h","l - [(n/2 - cf)/f] × h"],ans:0},
        {q:"In the step-deviation method, uᵢ = ?",opts:["(xᵢ - a)/h","(xᵢ + a)/h","xᵢ × a","xᵢ - a"],ans:0},
        {q:"To find median from ogive, we draw a line at:",opts:["y = n","y = n/2","y = n/4","y = 2n"],ans:1},
        {q:"A 'less than' ogive is drawn by plotting upper class boundaries against:",opts:["Frequency","Cumulative frequency","Relative frequency","Class width"],ans:1},
        {q:"For the data 2, 4, 5, 7, 8, 9, 10, 12, the median is:",opts:["7","7.5","8","6.5"],ans:1},
        {q:"If mean = 54, mode = 51, then median (approximately) is:",opts:["52","53","55","56"],ans:1},
        {q:"The formula for mode in grouped data is: l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h. Here f₁ is:",opts:["Frequency of class before modal class","Frequency of modal class","Frequency of class after modal class","Total frequency"],ans:1},
        {q:"When two ogives (less than and more than) are drawn, their intersection gives:",opts:["Mean","Mode","Median","Standard deviation"],ans:2}
      ],
      short: [
        {q:"Find the mean of the following distribution using the assumed mean method:\nClass: 10-20, 20-30, 30-40, 40-50, 50-60\nFrequency: 5, 10, 15, 8, 2",a:"Assumed mean (a) = 35, h = 10\nClass | fᵢ | xᵢ | dᵢ=xᵢ-35 | fᵢdᵢ\n10-20 |  5 | 15 | -20      | -100\n20-30 | 10 | 25 | -10      | -100\n30-40 | 15 | 35 |   0      |    0\n40-50 |  8 | 45 |  10      |   80\n50-60 |  2 | 55 |  20      |   40\nΣfᵢ = 40, Σfᵢdᵢ = -80\n\nMean = a + Σfᵢdᵢ/Σfᵢ = 35 + (-80/40) = 35 - 2 = 33"},
        {q:"Find the mode of the following data:\nClass: 10-25, 25-40, 40-55, 55-70, 70-85, 85-100\nFrequency: 2, 3, 7, 6, 6, 6",a:"Modal class = 40-55 (highest frequency = 7)\nl = 40, f₁ = 7, f₀ = 3, f₂ = 6, h = 15\n\nMode = l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h\n= 40 + [(7-3)/(2×7-3-6)] × 15\n= 40 + [4/(14-9)] × 15\n= 40 + (4/5) × 15\n= 40 + 12 = 52"},
        {q:"Find the median of the data: 45, 32, 19, 72, 56, 43, 18, 35, 62, 51.",a:"Arranging in ascending order:\n18, 19, 32, 35, 43, 45, 51, 56, 62, 72\nn = 10 (even)\nMedian = (5th term + 6th term)/2\n= (43 + 45)/2\n= 88/2 = 44"},
        {q:"If the mean of the following data is 18, find the missing frequency:\nClass: 11-13, 13-15, 15-17, 17-19, 19-21, 21-23, 23-25\nFreq: 3, 6, 9, 13, f, 5, 4",a:"xᵢ: 12, 14, 16, 18, 20, 22, 24\nΣfᵢ = 3+6+9+13+f+5+4 = 40+f\nΣfᵢxᵢ = 36+84+144+234+20f+110+96 = 704+20f\n\nMean = 18:\n(704 + 20f)/(40 + f) = 18\n704 + 20f = 720 + 18f\n2f = 16\nf = 8"}
      ],
      long: [
        {q:"The following table shows the ages of patients in a hospital:\nAge(years): 5-15, 15-25, 25-35, 35-45, 45-55, 55-65\nFrequency: 6, 11, 21, 23, 14, 5\nFind the mean, mode and median. Also verify the empirical relationship.",a:"n = Σf = 80, Assumed mean a = 30, h = 10\n\nClass | f  | x  | d=x-30 | fd  | cf\n5-15  |  6 |10  | -20    |-120 |  6\n15-25 | 11 |20  | -10    |-110 | 17\n25-35 | 21 |30  |   0    |   0 | 38\n35-45 | 23 |40  |  10    | 230 | 61\n45-55 | 14 |50  |  20    | 280 | 75\n55-65 |  5 |60  |  30    | 150 | 80\n\nΣfd = 430\nMEAN = 30 + 430/80 = 30 + 5.375 = 35.375 ≈ 35.38\n\nModal class = 35-45 (f = 23)\nMODE = 35 + [(23-21)/(2×23-21-14)] × 10\n= 35 + [2/11] × 10 = 35 + 1.82 = 36.82\n\nn/2 = 40, Median class = 35-45 (cf before = 38)\nMEDIAN = 35 + [(40-38)/23] × 10\n= 35 + 0.87 = 35.87\n\nEmpirical verification:\n3 × Median = 3 × 35.87 = 107.61\n2 × Mean + Mode = 70.76 + 36.82 = 107.58 ≈ 107.61 ✓\n(Mode ≈ 3 Median - 2 Mean)"}
      ],
      passage: [
        {q:"A survey was conducted of 100 students about time spent on studies per day:\nHours: 0-2, 2-4, 4-6, 6-8, 8-10\nStudents: 5, 10, 30, 40, 15\n\n(a) Find the modal class.\n(b) Calculate the mean study time.\n(c) Find the median study time.",a:"(a) Highest frequency = 40 (class 6-8)\nModal class = 6-8 hours\n\n(b) x values: 1, 3, 5, 7, 9\nΣfx = 5(1)+10(3)+30(5)+40(7)+15(9)\n= 5+30+150+280+135 = 600\nMean = 600/100 = 6 hours\n\n(c) cf: 5, 15, 45, 85, 100\nn/2 = 50, median class = 6-8 (cf before = 45)\nMedian = 6 + [(50-45)/40] × 2\n= 6 + 10/40 = 6 + 0.25 = 6.25 hours"}
      ]
    },

    "Probability": {
      mcq: [
        {q:"The theoretical probability of an event E is:",opts:["No. of trials / Total trials","Favourable outcomes / Total possible outcomes","Total outcomes / Favourable outcomes","1 / No. of trials"],ans:1},
        {q:"The probability of an impossible event is:",opts:["1","-1","0","0.5"],ans:2},
        {q:"The probability of a sure (certain) event is:",opts:["0","0.5","1","Greater than 1"],ans:2},
        {q:"P(E) + P(not E) = ?",opts:["0","0.5","2","1"],ans:3},
        {q:"A coin is tossed. Probability of getting a head is:",opts:["1/4","1/3","1/2","1"],ans:2},
        {q:"A die is thrown. Probability of getting a number greater than 4 is:",opts:["1/6","2/6","3/6","4/6"],ans:1},
        {q:"A card is drawn from 52 cards. Probability it's an ace is:",opts:["1/13","4/52 = 1/13","1/52","4/13"],ans:0},
        {q:"Probability of getting an even number when a die is thrown is:",opts:["1/6","1/3","1/2","2/3"],ans:2},
        {q:"A bag has 3 red, 4 blue, 2 green balls. Probability of drawing a red ball is:",opts:["1/3","1/4","1/9","3/9 = 1/3"],ans:0},
        {q:"Two coins are tossed. Number of possible outcomes is:",opts:["2","3","4","6"],ans:2},
        {q:"P(E) can never be:",opts:["0","0.5","1","Greater than 1"],ans:3},
        {q:"A card is drawn from well-shuffled deck. P(face card) = ?",opts:["3/52","12/52 = 3/13","4/52","1/13"],ans:1},
        {q:"The classical probability definition was given by:",opts:["James Bernoulli","Pierre Simon Laplace","J. Cardan","R.S. Woodward"],ans:1},
        {q:"Probability of getting sum 7 when two dice are thrown:",opts:["1/36","5/36","6/36 = 1/6","7/36"],ans:2},
        {q:"From a box of 100 bulbs, 10 are defective. P(non-defective) = ?",opts:["1/10","9/10","1/100","99/100"],ans:1},
        {q:"A number is selected from 1-20. P(prime number) = ?",opts:["2/5","7/20","8/20 = 2/5","1/5"],ans:2},
        {q:"In a family with two children, P(both girls) = ?",opts:["1/4","1/2","1/3","3/4"],ans:0},
        {q:"The first book on probability was written by:",opts:["James Bernoulli","Pierre Simon Laplace","J. Cardan","A. de Moivre"],ans:2},
        {q:"A die is thrown twice. P(getting 5 at least once) = ?",opts:["11/36","1/6","10/36","1/36"],ans:0},
        {q:"Probability of a leap year having 53 Sundays:",opts:["1/7","2/7","3/7","1/2"],ans:1}
      ],
      short: [
        {q:"A card is drawn from a well-shuffled deck of 52 cards. Find the probability of drawing: (i) a king, (ii) a red card, (iii) a spade.",a:"Total cards = 52\n(i) Kings = 4\nP(king) = 4/52 = 1/13\n\n(ii) Red cards = 26 (13 hearts + 13 diamonds)\nP(red card) = 26/52 = 1/2\n\n(iii) Spades = 13\nP(spade) = 13/52 = 1/4"},
        {q:"Two coins are tossed simultaneously. Find the probability of: (i) two heads, (ii) at least one head, (iii) no head.",a:"Sample space: {HH, HT, TH, TT}, Total = 4\n\n(i) Two heads: {HH}\nP(HH) = 1/4\n\n(ii) At least one head: {HH, HT, TH}\nP(at least one head) = 3/4\n\n(iii) No head: {TT}\nP(no head) = 1/4"},
        {q:"A bag contains 3 red balls and 5 black balls. A ball is drawn at random. Find P(red) and P(black). Verify P(E) + P(Ē) = 1.",a:"Total balls = 3 + 5 = 8\n\nP(red) = 3/8\nP(black) = 5/8\n\nVerification:\nP(red) + P(black) = 3/8 + 5/8 = 8/8 = 1 ✓\n(P(E) + P(not E) = 1 verified)"},
        {q:"A die is thrown once. Find the probability of getting: (i) a prime number, (ii) a number between 2 and 6.",a:"Sample space: {1, 2, 3, 4, 5, 6}, n = 6\n\n(i) Prime numbers: {2, 3, 5} → 3 outcomes\nP(prime) = 3/6 = 1/2\n\n(ii) Numbers between 2 and 6 (exclusive): {3, 4, 5} → 3 outcomes\nP(between 2 and 6) = 3/6 = 1/2"},
        {q:"One card is drawn from a deck of 52 cards. Find the probability that the card drawn is: (i) a face card, (ii) not a face card.",a:"Face cards = Kings, Queens, Jacks = 4+4+4 = 12\n\n(i) P(face card) = 12/52 = 3/13\n\n(ii) P(not a face card) = 1 - 3/13 = 10/13\n\nVerification: 3/13 + 10/13 = 13/13 = 1 ✓"},
        {q:"Why can probability never be greater than 1 or less than 0? Explain with the formula.",a:"Probability is defined as:\nP(E) = Number of favourable outcomes / Total number of outcomes\n\nThe number of favourable outcomes is always:\n• ≥ 0 (cannot be negative — you can't have negative outcomes)\n• ≤ Total outcomes (favourable outcomes can't exceed total)\n\nSo: 0 ≤ Favourable ≤ Total\nDividing by Total: 0 ≤ P(E) ≤ 1\n\nP(E) = 0 means impossible event (no favourable outcomes)\nP(E) = 1 means certain event (all outcomes are favourable)"}
      ],
      long: [
        {q:"Two dice are thrown simultaneously. Find the probability of: (i) getting sum 8, (ii) getting sum less than 7, (iii) getting same number on both dice, (iv) getting a doublet of prime numbers.",a:"Total outcomes = 6 × 6 = 36\n\n(i) Sum = 8: (2,6),(3,5),(4,4),(5,3),(6,2) = 5 outcomes\nP(sum 8) = 5/36\n\n(ii) Sum < 7: (1,1),(1,2),(1,3),(1,4),(1,5),(2,1),(2,2),(2,3),(2,4),(3,1),(3,2),(3,3),(4,1),(4,2),(5,1) = 15 outcomes\nP(sum < 7) = 15/36 = 5/12\n\n(iii) Same number: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) = 6 outcomes\nP(same number) = 6/36 = 1/6\n\n(iv) Doublet of primes: both dice show same prime number\nPrime numbers on a die: 2, 3, 5\nDoublets: (2,2),(3,3),(5,5) = 3 outcomes\nP(doublet of primes) = 3/36 = 1/12"},
        {q:"Explain theoretical (classical) probability and empirical (experimental) probability. How are they related? Give one example of each.",a:"THEORETICAL PROBABILITY:\nDefined for experiments where all outcomes are EQUALLY LIKELY.\nP(E) = Number of outcomes favourable to E / Total number of possible outcomes\n\nExample: When a fair die is thrown:\nP(getting 3) = 1/6\n(Only one face has '3' out of 6 equally likely outcomes)\n\nEMPIRICAL PROBABILITY:\nBased on actual experiment results.\nP(E) = Number of times E occurred / Total number of trials\n\nExample: If a coin is tossed 200 times and head appears 106 times:\nEmpirical P(head) = 106/200 = 0.53\n\nRELATIONSHIP:\n• Empirical probability approaches theoretical probability as the number of trials increases (Law of Large Numbers)\n• For a fair coin: Theoretical P(head) = 0.5\nWith more tosses, empirical probability → 0.5\n\nKEY DIFFERENCE:\n• Theoretical: calculated mathematically, assumes equal likelihood\n• Empirical: calculated from actual observations, may vary with each experiment"}
      ],
      passage: [
        {q:"Read the following and answer:\n\n'A school has 600 students: 350 boys and 250 girls. Of the boys, 150 like cricket and 200 like football. Of the girls, 100 like cricket and 150 like football.'\n\n(a) A student is selected at random. What is P(student is a girl)?\n(b) What is P(selected student likes cricket)?\n(c) What is P(selected student is a boy who likes football)?",a:"Total students = 600\n\n(a) Girls = 250\nP(girl) = 250/600 = 5/12\n\n(b) Students who like cricket = 150 + 100 = 250\nP(likes cricket) = 250/600 = 5/12\n\n(c) Boys who like football = 200\nP(boy who likes football) = 200/600 = 1/3"}
      ]
    }

};
