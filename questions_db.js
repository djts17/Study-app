const QUESTIONS_DB = {
  "mathematics": {
    "Real Numbers": {
      mcq: [
        {q:"What does the Fundamental Theorem of Arithmetic state?",opts:["Every composite number can be expressed as a product of primes uniquely","Every prime number is also composite","Every integer is a rational number","Every natural number is a prime"],ans:0},
        {q:"The HCF of 96 and 404 is:",opts:["2","4","6","8"],ans:1},
        {q:"Which of the following is an irrational number?",opts:["√4","√9","√7","√16"],ans:2},
        {q:"The decimal expansion of 17/8 is:",opts:["Terminating","Non-terminating repeating","Non-terminating non-repeating","None of these"],ans:0},
        {q:"LCM × HCF = ?",opts:["Sum of two numbers","Product of two numbers","Difference of two numbers","Square of the numbers"],ans:1},
        {q:"The decimal expansion of 1/3 is:",opts:["0.3","0.33","0.333...","0.3333 (terminating)"],ans:2},
        {q:"Which of the following is rational?",opts:["√2","√3","√25","√7"],ans:2},
        {q:"Euclid's Division Lemma states that for integers a and b (b>0), there exist unique q and r such that:",opts:["a = bq + r, 0 ≤ r < b","a = bq - r","a = b + qr","a = b × q × r"],ans:0},
        {q:"The LCM of 12 and 15 is:",opts:["30","45","60","180"],ans:2},
        {q:"If HCF(a,b)=1, then a and b are called:",opts:["Composite","Co-prime","Prime","Rational"],ans:1}
      ],
      short: [
        {q:"State the Fundamental Theorem of Arithmetic with an example.",a:"Every composite number can be expressed (factored) as a product of primes, and this factorisation is unique apart from the order of the prime factors.\nExample: 36 = 2 × 2 × 3 × 3 = 2² × 3². No matter how we factorise 36, we always get the same prime factors."},
        {q:"Explain Euclid's Division Lemma.",a:"For any two positive integers a and b, there exist unique integers q (quotient) and r (remainder) such that:\na = bq + r, where 0 ≤ r < b\nExample: For a=17, b=5: 17 = 5×3 + 2, so q=3, r=2."},
        {q:"Prove that √2 is irrational.",a:"Assume √2 is rational, so √2 = p/q where p and q have no common factor.\nSquaring: 2 = p²/q², so p² = 2q².\nThis means p² is even, so p is even. Let p = 2m.\nThen 4m² = 2q², so q² = 2m², meaning q is also even.\nBut this contradicts our assumption that p and q have no common factor.\nTherefore, √2 is irrational."},
        {q:"When is the decimal expansion of p/q terminating?",a:"The decimal expansion of a rational number p/q (in its lowest terms) is terminating if and only if the prime factorisation of q is of the form 2ⁿ × 5ᵐ, where n and m are non-negative integers.\nExample: 7/8 = 7/2³ → terminating (0.875)\n7/6 = 7/(2×3) → non-terminating"},
        {q:"Find the HCF of 96 and 404 using Euclid's Division Algorithm.",a:"404 = 96 × 4 + 20\n96 = 20 × 4 + 16\n20 = 16 × 1 + 4\n16 = 4 × 4 + 0\nSince remainder is 0, HCF(96, 404) = 4"},
        {q:"Find the LCM and HCF of 12, 15, and 21.",a:"Prime factorisation:\n12 = 2² × 3\n15 = 3 × 5\n21 = 3 × 7\nHCF = 3 (lowest powers of common factors)\nLCM = 2² × 3 × 5 × 7 = 420"}
      ],
      long: [
        {q:"Explain the Fundamental Theorem of Arithmetic and use it to find LCM and HCF of 26, 91 and 119.",a:"Fundamental Theorem of Arithmetic: Every composite number can be expressed as a product of primes in a unique way (ignoring order).\n\nFinding prime factorisation:\n26 = 2 × 13\n91 = 7 × 13\n119 = 7 × 17\n\nHCF = Product of smallest power of each common prime factor\nCommon factor: 13 appears in 26 and 91; HCF(26,91) = 13; HCF of all three = 1 (no common factor in all three)\n\nLCM = Product of greatest power of each prime factor\nLCM = 2 × 7 × 13 × 17 = 3094\n\nVerification: HCF × LCM = Product of numbers (for two numbers)\nFor 26 and 91: HCF=13, LCM=182; 13×182 = 2366 = 26×91 ✓"},
        {q:"Prove that 3 + 2√5 is irrational.",a:"We prove this by contradiction.\nAssume 3 + 2√5 is rational.\nThen 3 + 2√5 = p/q for some integers p, q (q≠0, HCF(p,q)=1)\n⟹ 2√5 = p/q - 3 = (p - 3q)/q\n⟹ √5 = (p - 3q)/(2q)\n\nSince p, q are integers, (p - 3q)/(2q) is rational.\nBut √5 is irrational.\nThis is a contradiction!\n\nTherefore, our assumption is wrong.\nHence, 3 + 2√5 is irrational."},
        {q:"Using Euclid's Division Algorithm, find HCF of 1190 and 1445. Also find LCM.",a:"Applying Euclid's Division Algorithm:\n1445 = 1190 × 1 + 255\n1190 = 255 × 4 + 170\n255 = 170 × 1 + 85\n170 = 85 × 2 + 0\n\nHCF(1190, 1445) = 85\n\nFinding LCM:\nLCM = (a × b) / HCF = (1190 × 1445) / 85\n= 1719550 / 85 = 20230\n\nVerification: HCF × LCM = 85 × 20230 = 1719550 = 1190 × 1445 ✓"},
        {q:"Show that any positive odd integer is of the form 4q+1 or 4q+3 where q is some integer.",a:"By Euclid's Division Lemma, for any positive integer a divided by 4:\na = 4q + r, where r = 0, 1, 2, or 3\n\nCase 1: r = 0 → a = 4q (even)\nCase 2: r = 1 → a = 4q + 1 (odd)\nCase 3: r = 2 → a = 4q + 2 = 2(2q+1) (even)\nCase 4: r = 3 → a = 4q + 3 (odd)\n\nSince a is odd, it cannot be of the form 4q or 4q+2.\nTherefore, any positive odd integer is of the form 4q+1 or 4q+3."}
      ]
    },
    "Polynomials": {
      mcq: [
        {q:"The degree of polynomial 3x² - 5x + 2 is:",opts:["0","1","2","3"],ans:2},
        {q:"The number of zeroes a quadratic polynomial can have is at most:",opts:["1","2","3","4"],ans:1},
        {q:"If α and β are zeroes of x²-5x+6, then α+β = ?",opts:["5","6","-5","-6"],ans:0},
        {q:"If α and β are zeroes of x²-5x+6, then αβ = ?",opts:["5","6","-5","-6"],ans:1},
        {q:"Which of the following is a zero of polynomial p(x) = x² - 4?",opts:["1","2","3","4"],ans:1},
        {q:"A quadratic polynomial has at most ___ zeroes:",opts:["1","2","3","4"],ans:1},
        {q:"If the zeroes of x²+px+q are 2 and 3, then p and q are:",opts:["p=-5, q=6","p=5, q=6","p=-5, q=-6","p=5, q=-6"],ans:0},
        {q:"The graph of a quadratic polynomial is a:",opts:["Straight line","Circle","Parabola","Hyperbola"],ans:2},
        {q:"The zero of linear polynomial ax+b is:",opts:["a/b","-b/a","b/a","-a/b"],ans:1},
        {q:"Division algorithm for polynomials states: Dividend = ?",opts:["Divisor × Quotient","Divisor × Quotient + Remainder","Divisor + Quotient × Remainder","None"],ans:1}
      ],
      short: [
        {q:"Find the zeroes of quadratic polynomial x²-3x-10.",a:"x² - 3x - 10 = 0\nFactorising: x² - 5x + 2x - 10 = 0\nx(x-5) + 2(x-5) = 0\n(x+2)(x-5) = 0\nZeroes: x = -2 and x = 5\nVerification: Sum = -2+5 = 3 = 3/1 ✓; Product = -2×5 = -10 = -10/1 ✓"},
        {q:"If α and β are zeroes of polynomial f(x) = x²-5x+6, find α²+β².",a:"From x²-5x+6: α+β = 5, αβ = 6\nα²+β² = (α+β)² - 2αβ\n= (5)² - 2(6)\n= 25 - 12 = 13"},
        {q:"What is the relationship between zeroes and coefficients of a quadratic polynomial?",a:"For a quadratic polynomial ax²+bx+c with zeroes α and β:\nSum of zeroes: α+β = -b/a\nProduct of zeroes: αβ = c/a\nThis relationship helps find polynomials given their zeroes."},
        {q:"Find a quadratic polynomial with zeroes 2 and -3.",a:"Sum of zeroes = 2 + (-3) = -1\nProduct of zeroes = 2 × (-3) = -6\nRequired polynomial = x² - (Sum)x + Product\n= x² - (-1)x + (-6)\n= x² + x - 6"},
        {q:"If one zero of polynomial 5x²+13x+k is reciprocal of the other, find k.",a:"Let the zeroes be α and 1/α.\nProduct of zeroes = c/a = k/5\nBut α × (1/α) = 1\nSo k/5 = 1\nk = 5"},
        {q:"Divide p(x) = x²+3x+2 by g(x) = x+1 and verify division algorithm.",a:"x² + 3x + 2 ÷ (x+1):\nx² + 3x + 2 = (x+1)(x+2) + 0\nQuotient = x+2, Remainder = 0\nVerification: Dividend = Divisor × Quotient + Remainder\nx²+3x+2 = (x+1)(x+2) + 0 ✓"}
      ],
      long: [
        {q:"If α and β are zeroes of x²-2x-8, form a quadratic polynomial whose zeroes are 2α and 2β.",a:"For x²-2x-8: α+β = 2, αβ = -8\n\nNew zeroes: 2α and 2β\nSum of new zeroes = 2α + 2β = 2(α+β) = 2(2) = 4\nProduct of new zeroes = 2α × 2β = 4αβ = 4(-8) = -32\n\nNew polynomial = x² - (sum)x + product\n= x² - 4x + (-32)\n= x² - 4x - 32\n\nVerification: Zeroes of x²-2x-8 are x=4 and x=-2\nNew zeroes should be 8 and -4\nCheck: 8+(-4)=4 ✓, 8×(-4)=-32 ✓"},
        {q:"Divide 3x³+x²+2x+5 by 1+2x+x². Find quotient and remainder and verify.",a:"Arranging: Dividend = 3x³+x²+2x+5, Divisor = x²+2x+1\n\nDivision:\n3x³+x²+2x+5 = (x²+2x+1)(3x-5) + (9x+10)\n\nStep 1: 3x³÷x² = 3x\n3x(x²+2x+1) = 3x³+6x²+3x\nSubtracting: -5x²-x+5\n\nStep 2: -5x²÷x² = -5\n-5(x²+2x+1) = -5x²-10x-5\nSubtracting: 9x+10\n\nQuotient = 3x-5\nRemainder = 9x+10\n\nVerification: (x²+2x+1)(3x-5)+(9x+10)\n= 3x³-5x²+6x²-10x+3x-5+9x+10\n= 3x³+x²+2x+5 ✓"}
      ]
    },
    "Quadratic Equations": {
      mcq: [
        {q:"The standard form of quadratic equation is:",opts:["ax+b=0","ax²+bx+c=0","ax³+bx²+c=0","ax²+b=0"],ans:1},
        {q:"The discriminant of ax²+bx+c=0 is:",opts:["b²-4ac","b²+4ac","4ac-b²","-b²+4ac"],ans:0},
        {q:"If discriminant = 0, then roots are:",opts:["Real and distinct","Real and equal","Imaginary","None"],ans:1},
        {q:"The roots of x²-5x+6=0 are:",opts:["2,3","1,6","-2,-3","2,-3"],ans:0},
        {q:"Using quadratic formula, x = ?",opts:["(-b±√D)/2a","(b±√D)/2a","(-b±√D)/a","(-b±D)/2a"],ans:0},
        {q:"If the product of roots = 6 and sum = -5, the equation is:",opts:["x²+5x+6=0","x²-5x+6=0","x²+5x-6=0","x²-5x-6=0"],ans:0},
        {q:"Which method cannot be used to solve quadratic equations?",opts:["Factorisation","Completing the square","Quadratic formula","Integration"],ans:3},
        {q:"For real roots, discriminant must be:",opts:["< 0","= 0","≥ 0","> 0 only"],ans:2},
        {q:"The sum of roots of 2x²-7x+3=0 is:",opts:["7/2","3/2","7/3","3/7"],ans:0},
        {q:"A quadratic equation has exactly ___ roots:",opts:["1","2","3","4"],ans:1}
      ],
      short: [
        {q:"Solve 2x²-5x+3=0 by factorisation.",a:"2x² - 5x + 3 = 0\n2x² - 2x - 3x + 3 = 0\n2x(x-1) - 3(x-1) = 0\n(2x-3)(x-1) = 0\nx = 3/2 or x = 1"},
        {q:"Find discriminant of 3x²-4√3x+4=0 and nature of roots.",a:"a=3, b=-4√3, c=4\nD = b²-4ac = (-4√3)²-4(3)(4)\n= 48 - 48 = 0\nSince D=0, roots are real and equal.\nRoots = -b/2a = 4√3/6 = 2√3/3"},
        {q:"Solve x²+x-2=0 using the quadratic formula.",a:"a=1, b=1, c=-2\nD = 1+8 = 9\nx = (-1±√9)/2 = (-1±3)/2\nx = (-1+3)/2 = 1 or x = (-1-3)/2 = -2"},
        {q:"A train travels 360km at uniform speed. If speed is 5km/h more, it takes 1 hour less. Find the speed.",a:"Let speed = x km/h\n360/x - 360/(x+5) = 1\n360(x+5) - 360x = x(x+5)\n1800 = x² + 5x\nx² + 5x - 1800 = 0\n(x+45)(x-40) = 0\nx = 40 (speed can't be negative)\nSpeed = 40 km/h"},
        {q:"Check whether -2 is a zero of 2x²+7x+3.",a:"p(-2) = 2(-2)² + 7(-2) + 3\n= 2(4) - 14 + 3\n= 8 - 14 + 3 = -3 ≠ 0\nTherefore -2 is NOT a zero."},
        {q:"For what value of k does kx(x-2)+6=0 have equal roots?",a:"kx²-2kx+6=0\nFor equal roots: D=0\n(-2k)²-4(k)(6)=0\n4k²-24k=0\n4k(k-6)=0\nk=0 or k=6\nSince k≠0 (not quadratic), k=6"}
      ],
      long: [
        {q:"A rectangular park has perimeter 80m and area 400m². Find its dimensions.",a:"Let length = l and breadth = b\nPerimeter: 2(l+b) = 80 → l+b = 40 → l = 40-b\nArea: l×b = 400\n(40-b)×b = 400\n40b - b² = 400\nb² - 40b + 400 = 0\n(b-20)² = 0\nb = 20m\nl = 40-20 = 20m\n\nThe park is a square with side 20m.\nVerification: Perimeter = 2(20+20) = 80m ✓, Area = 20×20 = 400m² ✓"},
        {q:"Solve 4x²+4√3x+3=0 by completing the square method.",a:"4x² + 4√3x + 3 = 0\nDividing by 4:\nx² + √3x + 3/4 = 0\nx² + √3x = -3/4\nAdding (√3/2)² on both sides:\nx² + √3x + 3/4 = -3/4 + 3/4 = 0\n(x + √3/2)² = 0\nx = -√3/2 (equal roots)\n\nVerification: D = (4√3)²-4(4)(3) = 48-48 = 0 ✓ (equal roots confirmed)"}
      ]
    },
    "Arithmetic Progressions": {
      mcq: [
        {q:"The common difference of AP: 2,5,8,11 is:",opts:["2","3","4","5"],ans:1},
        {q:"The nth term of AP is:",opts:["a+(n-1)d","a+nd","a-(n-1)d","a(n-1)d"],ans:0},
        {q:"Sum of first n terms of AP is:",opts:["n/2(a+l)","n(2a+(n-1)d)/2","Both A and B","None"],ans:2},
        {q:"Which of the following is NOT an AP?",opts:["1,3,5,7","2,4,6,8","1,4,9,16","5,10,15,20"],ans:2},
        {q:"The 10th term of AP 5,8,11,... is:",opts:["30","32","35","38"],ans:1},
        {q:"How many terms in AP 1,4,7,...,49?",opts:["15","16","17","18"],ans:2},
        {q:"Sum of first 20 natural numbers is:",opts:["190","200","210","220"],ans:2},
        {q:"If a=2, d=3, n=10, then S₁₀=?",opts:["155","185","200","210"],ans:0},
        {q:"The middle term of AP 1,7,13,...,55 is:",opts:["26","28","31","37"],ans:1},
        {q:"If 5th term of AP is 20 and 10th term is 40, the first term is:",opts:["4","8","10","12"],ans:0}
      ],
      short: [
        {q:"Find 20th term of AP 3,8,13,18,...",a:"a=3, d=8-3=5\na₂₀ = a+(20-1)d = 3+19×5 = 3+95 = 98"},
        {q:"Find sum of first 25 terms of AP 5,10,15,...",a:"a=5, d=5, n=25\nSₙ = n/2 × [2a+(n-1)d]\nS₂₅ = 25/2 × [10+24×5]\n= 25/2 × [10+120]\n= 25/2 × 130 = 1625"},
        {q:"How many terms of AP 9,17,25,... must be taken to get sum 450?",a:"a=9, d=8\nSₙ = n/2[2(9)+(n-1)8] = 450\nn[18+8n-8] = 900\nn[8n+10] = 900\n8n²+10n-900=0\n4n²+5n-450=0\n(4n+45)(n-10)=0\nn=10 (n must be positive)"},
        {q:"Which term of AP 3,15,27,39,... will be 132 more than its 54th term?",a:"a=3, d=12\n54th term = 3+53×12 = 639\nRequired term = 639+132 = 771\n771 = 3+(n-1)×12\n768 = (n-1)×12\nn-1 = 64, n = 65\n65th term is 132 more."},
        {q:"The sum of 4th and 8th terms of an AP is 24. The sum of 6th and 10th terms is 44. Find first three terms.",a:"a₄+a₈ = 2a+10d = 24 → a+5d = 12 ...(1)\na₆+a₁₀ = 2a+14d = 44 → a+7d = 22 ...(2)\nFrom (2)-(1): 2d=10, d=5\na=12-25=-13\nFirst three terms: -13, -8, -3"},
        {q:"A sum of ₹700 is to be used to give 7 cash prizes. If each prize is ₹20 less than the preceding prize, find value of each prize.",a:"Let prizes be in AP with first prize = a, d = -20\nS₇ = 7/2[2a+6(-20)] = 700\n2a - 120 = 200\n2a = 320, a = 160\nPrizes: ₹160,140,120,100,80,60,40"}
      ],
      long: [
        {q:"The sum of first n terms of AP is 4n-n². Find its first term, common difference and 10th term.",a:"Given: Sₙ = 4n - n²\n\nFirst term: a = S₁ = 4(1) - 1² = 4-1 = 3\nSum of first 2 terms: S₂ = 4(2) - 4 = 4\nSecond term: a₂ = S₂ - S₁ = 4-3 = 1\nCommon difference: d = a₂-a₁ = 1-3 = -2\n\nnth term: aₙ = a+(n-1)d = 3+(n-1)(-2) = 3-2n+2 = 5-2n\n\n10th term: a₁₀ = 5-2(10) = 5-20 = -15\n\nVerification: S₁₀ = 4(10)-(10)² = 40-100 = -60\nAlso S₁₀ = 10/2[2(3)+9(-2)] = 5[6-18] = 5(-12) = -60 ✓"},
        {q:"A ladder has rungs 25cm apart. The rungs decrease uniformly in length from 45cm at the bottom to 25cm at the top. If the top and bottom rungs are 2.5m apart, find total length of wood required.",a:"Distance between rungs = 25cm = 0.25m\nTotal height = 2.5m\nNumber of rungs = 2.5/0.25 + 1 = 11 rungs\n\nLength of rungs form AP:\na (bottom) = 45cm, l (top) = 25cm, n = 11\n\nTotal length = n/2(a+l)\n= 11/2 × (45+25)\n= 11/2 × 70\n= 385 cm\n\nTotal wood = 385 cm = 3.85 m"}
      ]
    }
  },
  "science": {
    "Chemical Reactions and Equations": {
      mcq: [
        {q:"Which of the following is a chemical change?",opts:["Melting of ice","Cutting of paper","Rusting of iron","Boiling of water"],ans:2},
        {q:"In a balanced chemical equation, the number of atoms of each element is:",opts:["Different on both sides","Equal on both sides","More on reactant side","More on product side"],ans:1},
        {q:"Which type of reaction is: A + B → AB?",opts:["Decomposition","Combination","Displacement","Double displacement"],ans:1},
        {q:"Burning of magnesium in air is an example of:",opts:["Decomposition reaction","Combination reaction","Displacement reaction","Oxidation only"],ans:1},
        {q:"In the reaction: Zn + CuSO₄ → ZnSO₄ + Cu, zinc is:",opts:["Reduced","Oxidised","Neither","Both"],ans:1},
        {q:"Electrolysis of water produces:",opts:["H₂ and O₂","H₂ and CO₂","O₂ and CO₂","H₂O and O₂"],ans:0},
        {q:"Which gas is evolved when dilute HCl reacts with zinc?",opts:["O₂","CO₂","H₂","Cl₂"],ans:2},
        {q:"Corrosion of iron is called:",opts:["Rusting","Burning","Rancidity","Oxidation"],ans:0},
        {q:"Which reaction releases heat?",opts:["Endothermic","Exothermic","Both","Decomposition"],ans:1},
        {q:"Fe₂O₃ + 2Al → Al₂O₃ + 2Fe is an example of:",opts:["Combination","Displacement","Double displacement","Decomposition"],ans:1}
      ],
      short: [
        {q:"What is a chemical equation? Write a balanced chemical equation for burning of methane.",a:"A chemical equation is a symbolic representation of a chemical reaction using formulae of reactants and products.\nBalanced equation for burning of methane:\nCH₄ + 2O₂ → CO₂ + 2H₂O\nVerification: C:1=1, H:4=4, O:4=4 ✓"},
        {q:"Explain the difference between exothermic and endothermic reactions with examples.",a:"Exothermic reactions: Reactions in which heat is released to the surroundings.\nExample: Burning of natural gas: CH₄ + 2O₂ → CO₂ + 2H₂O + heat\n\nEndothermic reactions: Reactions in which heat is absorbed from the surroundings.\nExample: Decomposition of calcium carbonate:\nCaCO₃ + heat → CaO + CO₂"},
        {q:"What are oxidation and reduction reactions? Define with examples.",a:"Oxidation: Addition of oxygen or removal of hydrogen.\nExample: 2Mg + O₂ → 2MgO (Mg is oxidised)\n\nReduction: Removal of oxygen or addition of hydrogen.\nExample: CuO + H₂ → Cu + H₂O (CuO is reduced)\n\nThese reactions occur simultaneously and are called redox reactions."},
        {q:"What is corrosion? How can it be prevented?",a:"Corrosion is the slow degradation of metals due to chemical reactions with moisture and oxygen in the environment.\nExample: Rusting of iron (4Fe + 3O₂ + 2H₂O → 2Fe₂O₃.H₂O)\n\nPrevention methods:\n1. Painting the surface\n2. Galvanisation (coating with zinc)\n3. Electroplating\n4. Using alloys like stainless steel"},
        {q:"What is rancidity? How is it prevented?",a:"Rancidity is the oxidation of fats and oils in food, resulting in unpleasant smell and taste.\nPrevention methods:\n1. Adding antioxidants to food\n2. Storing food in airtight containers\n3. Refrigeration\n4. Flushing packets with nitrogen gas (chips packets)\n5. Vacuum packaging"},
        {q:"Balance the following equation: Fe + H₂O → Fe₃O₄ + H₂",a:"Unbalanced: Fe + H₂O → Fe₃O₄ + H₂\nBalancing Fe: 3Fe + H₂O → Fe₃O₄ + H₂\nBalancing O: 3Fe + 4H₂O → Fe₃O₄ + H₂\nBalancing H: 3Fe + 4H₂O → Fe₃O₄ + 4H₂\nVerification: Fe:3=3, H:8=8, O:4=4 ✓"}
      ],
      long: [
        {q:"Explain different types of chemical reactions with examples and balanced equations.",a:"1. Combination Reaction: Two or more substances combine to form a new substance.\nExample: 2H₂ + O₂ → 2H₂O\n\n2. Decomposition Reaction: A single substance breaks down into two or more substances.\nExample: 2H₂O → 2H₂ + O₂ (electrolysis)\nCaCO₃ → CaO + CO₂ (thermal decomposition)\n\n3. Displacement Reaction: A more reactive element displaces a less reactive element.\nExample: Zn + CuSO₄ → ZnSO₄ + Cu\n\n4. Double Displacement Reaction: Exchange of ions between two reactants.\nExample: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl\n\n5. Oxidation-Reduction (Redox) Reaction: Simultaneous oxidation and reduction.\nExample: CuO + H₂ → Cu + H₂O\n(CuO is reduced, H₂ is oxidised)\n\nEach type of reaction is important in daily life and industrial processes."},
        {q:"What happens when dilute sulphuric acid is poured on iron filings? Write balanced equation and explain the observations.",a:"When dilute H₂SO₄ reacts with iron:\nFe + H₂SO₄ → FeSO₄ + H₂↑\n\nObservations:\n1. Iron filings dissolve gradually in acid\n2. Colourless, odourless hydrogen gas is evolved (can be tested with burning splint - gives pop sound)\n3. The solution turns light green due to formation of FeSO₄ (ferrous sulphate)\n4. The reaction is exothermic - solution gets warm\n\nType of reaction: This is a displacement reaction where iron (more reactive) displaces hydrogen from dilute sulphuric acid.\n\nThe hydrogen produced can be tested by holding a burning matchstick near the mouth of the test tube - it burns with a pop sound."}
      ]
    },
    "Life Processes": {
      mcq: [
        {q:"Which of the following is NOT a life process?",opts:["Nutrition","Respiration","Reproduction","Crystallisation"],ans:3},
        {q:"The process by which plants make food using sunlight is:",opts:["Respiration","Photosynthesis","Transpiration","Digestion"],ans:1},
        {q:"Stomata in plants help in:",opts:["Photosynthesis only","Transpiration only","Both exchange of gases and transpiration","None"],ans:2},
        {q:"Which enzyme is present in saliva?",opts:["Pepsin","Salivary amylase","Trypsin","Lipase"],ans:1},
        {q:"The largest gland in human body is:",opts:["Pancreas","Liver","Kidney","Salivary gland"],ans:1},
        {q:"Oxygen is carried in blood by:",opts:["WBC","Plasma","Haemoglobin","Platelets"],ans:2},
        {q:"The functional unit of kidney is:",opts:["Neuron","Nephron","Alveolus","Villus"],ans:1},
        {q:"Plants release oxygen during:",opts:["Respiration","Photosynthesis","Transpiration","Excretion"],ans:1},
        {q:"Glycolysis occurs in:",opts:["Nucleus","Mitochondria","Cytoplasm","Chloroplast"],ans:2},
        {q:"Bile is produced by:",opts:["Pancreas","Stomach","Liver","Small intestine"],ans:2}
      ],
      short: [
        {q:"What is photosynthesis? Write the overall equation for photosynthesis.",a:"Photosynthesis is the process by which green plants make food (glucose) using sunlight, carbon dioxide and water.\n\nOverall equation:\n6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nRequirements: Sunlight, chlorophyll, CO₂, water\nProducts: Glucose (food), Oxygen"},
        {q:"Differentiate between aerobic and anaerobic respiration.",a:"Aerobic Respiration:\n- Occurs in presence of oxygen\n- Complete oxidation of glucose\n- Produces CO₂ and H₂O\n- More energy released (38 ATP)\n- Occurs in mitochondria\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy\n\nAnaerobic Respiration:\n- Occurs without oxygen\n- Incomplete breakdown of glucose\n- Produces ethanol/lactic acid\n- Less energy released (2 ATP)\n- Occurs in cytoplasm"},
        {q:"Explain the double circulation of blood in humans.",a:"Double circulation means blood passes through the heart twice for one complete circuit:\n\n1. Pulmonary Circulation: Right side of heart → Lungs → Left side of heart\n(Deoxygenated blood gets oxygenated in lungs)\n\n2. Systemic Circulation: Left side of heart → Body organs → Right side of heart\n(Oxygenated blood supplies oxygen to body cells)\n\nAdvantage: Efficient oxygen supply to all body parts; keeps oxygenated and deoxygenated blood separate."},
        {q:"What are the functions of kidney in human body?",a:"Functions of kidney:\n1. Filtration of blood to remove waste products like urea, uric acid\n2. Maintenance of water and salt balance in body\n3. Regulation of blood pressure\n4. Removal of drugs and toxins\n5. Maintaining pH of blood\n\nThe functional unit is nephron. Kidneys filter about 1700 litres of blood per day and produce about 1.5 litres of urine."},
        {q:"What is transpiration? What is its importance?",a:"Transpiration is the loss of water vapour through stomata in leaves of plants.\n\nImportance:\n1. Helps in absorption and transport of water and minerals from roots\n2. Creates a pull (transpiration pull) to move water up\n3. Cools the plant surface\n4. Helps in opening and closing of stomata\n5. Contributes to water cycle"},
        {q:"How does nutrition occur in Amoeba?",a:"Amoeba uses holozoic nutrition:\n1. Ingestion: Amoeba extends pseudopodia around the food particle\n2. The food is engulfed to form a food vacuole (phagocytosis)\n3. Digestion: Digestive enzymes break down food in the vacuole\n4. Absorption: Digested food is absorbed into cytoplasm\n5. Egestion: Undigested material is expelled through the cell membrane"}
      ],
      long: [
        {q:"Describe the process of digestion of food in the human digestive system.",a:"The human digestive system processes food through these organs:\n\n1. Mouth: Mechanical digestion by teeth. Salivary amylase (in saliva) converts starch into simple sugars. Food forms a bolus.\n\n2. Oesophagus: Food passes down by peristalsis (wave-like muscular contractions).\n\n3. Stomach: Gastric juice (HCl + pepsin + mucus) is secreted.\n- HCl kills bacteria and activates pepsin\n- Pepsin digests proteins\n- Mucus protects stomach walls\n- Food becomes semi-liquid chyme\n\n4. Small Intestine: Main site of digestion and absorption.\n- Receives bile from liver (emulsifies fats)\n- Pancreatic juice digests all food types\n- Intestinal juice completes digestion\n- Villi absorb nutrients into blood\n\n5. Large Intestine: Absorbs water; undigested food becomes faeces.\n\n6. Rectum and Anus: Faeces stored in rectum and expelled through anus (egestion)."},
        {q:"With a neat diagram description, explain the structure and function of the human heart.",a:"The human heart is a muscular organ about the size of a fist, located in the chest cavity.\n\nStructure:\n- Divided into 4 chambers: Right Atrium, Right Ventricle, Left Atrium, Left Ventricle\n- Separated by septa (wall) to prevent mixing of blood\n- Valves (bicuspid, tricuspid, semilunar) prevent backflow of blood\n\nDiagram description: Heart shows RA receiving deoxygenated blood from body via vena cava; RV pumps it to lungs via pulmonary artery; LA receives oxygenated blood from lungs via pulmonary vein; LV pumps it to body via aorta.\n\nFunctions:\n1. Right side receives deoxygenated blood from body, pumps to lungs\n2. Left side receives oxygenated blood from lungs, pumps to body\n3. Double circulation ensures efficient oxygen delivery\n4. Heart beats ~72 times/minute, pumping ~5 litres of blood per minute\n\nImportance: Ensures continuous supply of oxygen and nutrients to all body cells"}
      ]
    },
    "Light – Reflection and Refraction": {
      mcq: [
        {q:"The angle of incidence is equal to angle of reflection. This is the:",opts:["1st law of reflection","2nd law of reflection","Law of refraction","Snell's law"],ans:0},
        {q:"A concave mirror forms a real and inverted image when object is placed:",opts:["Between F and C","At infinity","Between F and P","At C"],ans:0},
        {q:"The focal length of a plane mirror is:",opts:["Zero","Infinity","Equal to radius","Negative"],ans:1},
        {q:"Which lens is used to correct myopia?",opts:["Convex lens","Concave lens","Bifocal lens","Cylindrical lens"],ans:1},
        {q:"The refractive index of glass with respect to air (n=1.5) means:",opts:["Light travels 1.5 times faster in glass","Light travels 1.5 times slower in glass","Light bends 1.5 times","None"],ans:1},
        {q:"Mirror formula is:",opts:["1/f=1/v+1/u","1/f=1/v-1/u","f=v+u","f=v-u"],ans:0},
        {q:"Magnification formula for mirror is:",opts:["m=v/u","m=-v/u","m=u/v","m=-u/v"],ans:1},
        {q:"Which phenomenon explains the twinkling of stars?",opts:["Reflection","Refraction","Dispersion","Total internal reflection"],ans:1},
        {q:"The power of a lens of focal length -0.5m is:",opts:["2D","-2D","5D","-5D"],ans:1},
        {q:"Critical angle for total internal reflection depends on:",opts:["Angle of incidence","Refractive index","Speed of light in vacuum","Both B and C"],ans:3}
      ],
      short: [
        {q:"State the laws of reflection of light.",a:"First Law: The incident ray, the reflected ray and the normal to the surface at the point of incidence all lie in the same plane.\n\nSecond Law: The angle of incidence (∠i) is always equal to the angle of reflection (∠r).\n∠i = ∠r\n\nThese laws apply to all types of surfaces - plane, concave and convex."},
        {q:"What is refraction of light? State Snell's Law.",a:"Refraction is the bending of light when it passes from one transparent medium to another due to change in speed.\n\nSnell's Law: n₁ sin θ₁ = n₂ sin θ₂\nOr: sin i / sin r = constant = n (refractive index)\n\nWhere n₁ and n₂ are refractive indices of medium 1 and 2, θ₁ is angle of incidence and θ₂ is angle of refraction."},
        {q:"An object is placed 15cm from a concave mirror of focal length 10cm. Find position, nature and size of image.",a:"Given: u = -15cm (object), f = -10cm (concave mirror)\nUsing mirror formula: 1/v + 1/u = 1/f\n1/v = 1/f - 1/u = 1/(-10) - 1/(-15)\n= -1/10 + 1/15 = (-3+2)/30 = -1/30\nv = -30cm\nm = -v/u = -(-30)/(-15) = -2\nImage: Real, inverted, magnified (at 30cm behind mirror)"},
        {q:"What is the power of a lens? If focal length is 25cm, find the power.",a:"Power of a lens is the reciprocal of its focal length in metres.\nP = 1/f (in metres)\n\nGiven: f = 25 cm = 0.25 m\nP = 1/0.25 = +4 D (dioptres)\n\nPositive power → converging lens (convex)\nNegative power → diverging lens (concave)"},
        {q:"Why does a pencil appear to be bent when placed in water?",a:"When light from the submerged part of the pencil travels from water (denser medium) to air (rarer medium), it bends away from the normal (refraction).\n\nOur brain perceives light as travelling in straight lines, so it appears that the submerged part of the pencil is at a different position than it actually is.\n\nThis causes the pencil to appear bent or broken at the water surface."},
        {q:"Differentiate between concave and convex mirrors with their uses.",a:"Concave Mirror:\n- Reflecting surface curves inward\n- Converging mirror\n- Can form real and virtual images\n- Uses: Shaving/makeup mirrors, headlights, satellite dishes, solar furnaces\n\nConvex Mirror:\n- Reflecting surface curves outward\n- Diverging mirror\n- Always forms virtual, erect, diminished images\n- Uses: Rear-view mirrors, security mirrors in shops, road bends"}
      ],
      long: [
        {q:"Draw ray diagrams and explain image formation by a concave mirror for different positions of object.",a:"Image formation by concave mirror:\n\n1. Object at infinity: Image forms at F, real, inverted, highly diminished\n[Ray diagram: Parallel rays converge at focus]\n\n2. Object beyond C (centre of curvature): Image forms between F and C, real, inverted, diminished\n[Ray diagram: Rays cross between F and C]\n\n3. Object at C: Image forms at C, real, inverted, same size\n[Ray diagram: Rays cross at C on other side]\n\n4. Object between C and F: Image forms beyond C, real, inverted, magnified\n[Ray diagram: Rays diverge, appear to come from beyond C]\n\n5. Object at F: Image at infinity (no image formed)\n[Ray diagram: Reflected rays are parallel]\n\n6. Object between P and F: Image forms behind mirror, virtual, erect, magnified\n[Ray diagram: Reflected rays appear to diverge from behind mirror]\n\nApplications: Position 2 used in headlights; Position 6 used in shaving mirrors"}
      ]
    },
    "Electricity": {
      mcq: [
        {q:"The SI unit of electric charge is:",opts:["Ampere","Volt","Coulomb","Ohm"],ans:2},
        {q:"Ohm's Law states that V=IR, where R is:",opts:["Variable","Constant for given conditions","Always 1","Zero"],ans:1},
        {q:"In series circuit, the total resistance is:",opts:["Less than smallest R","Greater than largest R","Equal to sum of all R","Product of all R"],ans:2},
        {q:"In parallel circuit, total resistance is:",opts:["Sum of all","Less than smallest R","Greater than largest R","Product of all"],ans:1},
        {q:"The heating effect of electric current is used in:",opts:["Fan","Refrigerator","Electric iron","Radio"],ans:2},
        {q:"Electrical power is given by:",opts:["P=VI","P=V/I","P=I/V","P=V+I"],ans:0},
        {q:"1 kWh equals:",opts:["1000 J","3.6×10⁶ J","3600 J","1 J"],ans:1},
        {q:"The commercial unit of electricity is:",opts:["Joule","Watt","kWh","Calorie"],ans:2},
        {q:"Which material is used for making filament of bulb?",opts:["Copper","Aluminium","Tungsten","Iron"],ans:2},
        {q:"Current in a circuit is 2A, resistance is 5Ω, voltage is:",opts:["10V","2.5V","7V","0.4V"],ans:0}
      ],
      short: [
        {q:"State Ohm's Law and its limitations.",a:"Ohm's Law: At constant temperature, the electric current (I) through a conductor is directly proportional to the potential difference (V) across its ends.\nV = IR (where R = resistance)\n\nLimitations:\n1. Not valid at very high temperatures (resistance changes)\n2. Not obeyed by semiconductors, gas tubes\n3. Not valid for non-linear elements like diodes"},
        {q:"Three resistors of 4Ω, 6Ω and 12Ω are connected in parallel. Find effective resistance.",a:"For parallel connection:\n1/R = 1/R₁ + 1/R₂ + 1/R₃\n1/R = 1/4 + 1/6 + 1/12\n1/R = 3/12 + 2/12 + 1/12 = 6/12 = 1/2\nR = 2Ω\nNote: Effective resistance (2Ω) is less than smallest resistor (4Ω) ✓"},
        {q:"An electric bulb of 60W is used for 6 hours per day. Calculate units consumed in 30 days.",a:"Power = 60W = 0.06 kW\nTime = 6 hours/day × 30 days = 180 hours\nEnergy = Power × Time = 0.06 × 180 = 10.8 kWh\n= 10.8 units\nCost (at ₹5/unit) = ₹54"},
        {q:"Why are household appliances connected in parallel, not in series?",a:"Advantages of parallel connection in homes:\n1. Each appliance gets the same supply voltage (230V)\n2. If one appliance fails, others continue to work\n3. Each appliance can be switched on/off independently\n4. Total current is sum of individual currents; more power available\n5. Adding more appliances doesn't change voltage for existing ones"},
        {q:"State the factors on which resistance of a wire depends.",a:"Resistance of a wire depends on:\n1. Length (l): R ∝ l (longer wire = more resistance)\n2. Cross-sectional area (A): R ∝ 1/A (thicker wire = less resistance)\n3. Nature of material: Different materials have different resistivity (ρ)\n4. Temperature: Resistance increases with temperature for metals\n\nR = ρl/A (where ρ = resistivity of material)"},
        {q:"What is the heating effect of electric current? Write Joule's Law.",a:"When electric current passes through a conductor, electrical energy is converted to heat energy. This is the heating effect of current, used in heaters, bulbs, etc.\n\nJoule's Law: H = I²Rt\nWhere:\nH = heat produced (in Joules)\nI = current (in Amperes)\nR = resistance (in Ohms)\nt = time (in seconds)\n\nHeat produced is proportional to: square of current, resistance, and time."}
      ],
      long: [
        {q:"Derive an expression for equivalent resistance when resistors are connected in series.",a:"Consider three resistors R₁, R₂, R₃ connected in series with voltage V and current I.\n\nIn series:\n- Same current (I) flows through all resistors\n- Total voltage = Sum of individual voltages\nV = V₁ + V₂ + V₃\n\nBy Ohm's law:\nV₁ = IR₁, V₂ = IR₂, V₃ = IR₃\n\nTherefore:\nV = IR₁ + IR₂ + IR₃ = I(R₁+R₂+R₃)\n\nIf Rs is equivalent resistance:\nV = IRs\n\nComparing: Rs = R₁ + R₂ + R₃\n\nFor n resistors: Rs = R₁ + R₂ + ... + Rₙ\n\nConclusion: In series connection, equivalent resistance is always greater than any individual resistance. This is why series connection is not used in homes."}
      ]
    }
  },
  "english_ff": {
    "A Letter to God": {
      mcq: [
        {q:"Who is the protagonist of 'A Letter to God'?",opts:["The postmaster","Lencho","God","A farmer"],ans:1},
        {q:"What destroyed Lencho's crops?",opts:["Flood","Drought","Hailstorm","Locusts"],ans:2},
        {q:"Lencho compared the large hailstones to:",opts:["Pearls","Silver coins","Gold coins","Diamonds"],ans:1},
        {q:"To whom did Lencho write a letter?",opts:["The President","His friend","God","The bank"],ans:2},
        {q:"How much money did Lencho ask for?",opts:["50 pesos","100 pesos","200 pesos","150 pesos"],ans:1},
        {q:"Who collected money to help Lencho?",opts:["Lencho's neighbours","God","The postmaster","Government"],ans:2},
        {q:"How much money did Lencho receive?",opts:["100 pesos","70 pesos","50 pesos","80 pesos"],ans:1},
        {q:"What did Lencho think about the post office employees?",opts:["They were kind","They were thieves","They were corrupt","They were helpful"],ans:1},
        {q:"What did Lencho's faith represent?",opts:["Naivety","Blind faith","Strong belief in God","Foolishness"],ans:2},
        {q:"The story 'A Letter to God' was originally written in:",opts:["English","Spanish","French","Portuguese"],ans:1}
      ],
      short: [
        {q:"What did Lencho hope for before the rain?",a:"Lencho hoped for a good downpour or at least a shower to water his ripe corn fields. He watched the sky in the north-east and was happy to see rain clouds approaching. He compared the raindrops to 'new coins' as he expected a good harvest which would bring him money."},
        {q:"How did the hailstorm change the situation for Lencho?",a:"The hailstorm completely destroyed Lencho's crops. Large hailstones fell for an hour, turning the cornfield white as if covered with salt. Not a leaf remained on the trees. The corn was totally destroyed. All of Lencho's hard work throughout the year was ruined and his family faced hunger. Lencho felt deep sadness and despair."},
        {q:"Why did Lencho write a letter to God?",a:"After the hailstorm destroyed his crops, Lencho had no hope left. He believed that only God could help him. Since he had deep faith in God, he decided to write a letter asking for 100 pesos - the amount he needed to sow seeds again and survive until the next harvest."},
        {q:"How did the postmaster react when he received the letter addressed to God?",a:"The postmaster was surprised to receive a letter addressed to God. He was moved by Lencho's simple faith. He did not want to shake Lencho's faith, so he decided to help. He collected money from his employees, contributing himself also. Though he could gather only 70 pesos, he sent it to Lencho with a letter signed 'God'."},
        {q:"Why was Lencho not satisfied with the money he received?",a:"Lencho asked for 100 pesos but received only 70 pesos. He believed that God would never make a mistake, so he concluded that the post office employees had stolen 30 pesos. His blind faith in God did not allow him to think that God's help might come through imperfect human means."},
        {q:"What moral does the story 'A Letter to God' convey?",a:"The story conveys the theme of blind faith and its irony. Lencho's unshakeable faith in God is admirable, but he fails to recognise the goodness and generosity of fellow humans. The postmaster's kindness is ignored. The story also shows that true faith should acknowledge the good in others. It highlights the irony that those who genuinely helped Lencho were called thieves by him."}
      ],
      long: [
        {q:"'A Letter to God' presents a contrast between Lencho's faith and his attitude towards fellow humans. Discuss.",a:"'A Letter to God' by G.L. Fuentes presents a profound irony through the contrast between Lencho's faith in God and his attitude towards fellow human beings.\n\nLencho's Faith in God:\nLencho possesses an extraordinary, almost childlike faith in God. When a devastating hailstorm destroys his entire crop, he does not lose hope. Instead of seeking human help, he directly writes a letter to God asking for 100 pesos. His faith is so strong that he does not doubt for a moment that God will help him.\n\nHis Attitude Towards Humans:\nThe postmaster and his employees, moved by Lencho's simple faith, generously donate money. They collect 70 pesos and send it to Lencho, signing the letter as 'God'. However, when Lencho receives only 70 pesos instead of 100, he immediately assumes that the post office employees have stolen the remaining 30 pesos. He writes another letter to God calling them 'a bunch of crooks'.\n\nThe Irony:\nThe very people who went out of their way to help Lencho become objects of his suspicion and anger. While he trusts God completely, he distrusts the humans who actually helped him.\n\nTheme:\nThe story teaches us that God's help often comes through human beings. Blind faith that ignores human goodness is incomplete. We must learn to recognise and appreciate the kindness of fellow humans who may be instruments of divine help."}
      ]
    },
    "The Hundred Dresses–I": {
      mcq: [
        {q:"What was Wanda Petronski's full name suggesting?",opts:["She was rich","She was from Poland","She was American","She was famous"],ans:1},
        {q:"How many dresses did Wanda claim to have?",opts:["50","100","200","150"],ans:1},
        {q:"Where did Wanda live?",opts:["In the main town","In Boggins Heights","Near school","On a farm"],ans:1},
        {q:"Who was Maddie's best friend?",opts:["Wanda","Peggy","Cecile","None"],ans:1},
        {q:"Why did Peggy tease Wanda?",opts:["Because she was poor","Because of her funny name","Because of her claim of 100 dresses","All of these"],ans:2},
        {q:"Wanda always wore the same:",opts:["Blue dress","White dress","Green dress","Faded blue dress"],ans:3},
        {q:"What contest did Wanda win?",opts:["Essay writing","Drawing contest","Science contest","Spelling bee"],ans:1},
        {q:"Who felt more guilty about teasing Wanda?",opts:["Peggy","Maddie","Both equally","Neither"],ans:1},
        {q:"What designs did Wanda draw for the contest?",opts:["Animals","Flowers","Dresses","Landscapes"],ans:2},
        {q:"Why did Wanda stop coming to school?",opts:["She was ill","Her family moved away","She was expelled","She changed school"],ans:1}
      ],
      short: [
        {q:"Describe the character of Wanda Petronski.",a:"Wanda Petronski was a Polish girl who came from a poor family and lived in Boggins Heights, a poor neighbourhood. She always wore the same faded blue dress that was clean but wrinkled. Despite being teased about her unusual name and her claim of having 100 dresses, she maintained her dignity. She was actually very talented - she won the drawing contest with her beautiful designs of 100 different dresses, showing she was creative and imaginative."},
        {q:"Why did Maddie feel uncomfortable about the teasing of Wanda?",a:"Maddie felt uncomfortable because deep down she knew the teasing was wrong and cruel. Unlike Peggy who initiated the teasing, Maddie participated out of a desire to fit in and not be excluded herself. She was also poor and feared that if she spoke against Peggy, she too might become an object of ridicule. This conflict between her conscience and her social fear made her feel guilty about her silence."},
        {q:"What was the drawing contest? What was Wanda's contribution?",a:"The school held a drawing contest - boys for motor boats and girls for dresses. The winner's work would be displayed in the school. Wanda submitted 100 drawings of dresses - each beautiful, unique and different. They ranged from gorgeous evening gowns to sports clothes, all with perfect colour combinations and design. Wanda won the contest with her remarkable talent."},
        {q:"How did Peggy justify her teasing of Wanda?",a:"Peggy justified her teasing by saying she never called Wanda a foreigner or made fun of her name. She also said she was just trying to make Wanda talk about her dresses, thinking it made Wanda feel important. Peggy convinced herself that her teasing was harmless and that she never really meant to hurt Wanda. This shows how bullies often rationalise their behaviour."},
        {q:"What happened when Wanda stopped coming to school?",a:"When Wanda stopped coming to school, her teacher Miss Mason received a letter from Wanda's father. He wrote that his family was moving to a big city where no one would ask Wanda to spell her name or make fun of it. The teacher read the letter to the class and everyone felt sad, realising too late that Wanda had been hurt by their treatment of her."},
        {q:"What is the central theme of 'The Hundred Dresses'?",a:"The central theme of 'The Hundred Dresses' is bullying, social exclusion and its consequences. It explores how children can be cruel to those who are different, and how silence in the face of injustice is also a form of participation. The story highlights the guilt that comes from not standing up for someone who is being wronged, and the importance of treating everyone with dignity and respect regardless of their background or appearance."}
      ],
      long: [
        {q:"How does the story explore the theme of bullying and its impact on the victim and the bystanders?",a:"'The Hundred Dresses - I' by Eleanor Estes masterfully explores the theme of bullying and its far-reaching consequences.\n\nThe Bully's Perspective (Peggy):\nPeggy is not portrayed as completely evil; she genuinely believes she is not being cruel. She finds Wanda's claim of 100 dresses amusing and uses it as entertainment. This represents how many bullies fail to recognise the harm they cause.\n\nThe Bystander's Guilt (Maddie):\nMaddie is the most complex character. She knows the teasing is wrong but lacks the courage to speak up. She is herself poor and fears becoming the next target. Her silent participation represents the moral dilemma faced by bystanders. Her growing guilt is the emotional heart of the story.\n\nImpact on the Victim (Wanda):\nWanda responds to teasing by retreating into her imagination - her 100 dresses represent her inner world of creativity and dreams. The teasing ultimately causes her family to leave town. Despite this, Wanda shows remarkable grace by gifting her drawings to those who teased her.\n\nLessons for Readers:\n1. Bullying causes real harm even when the bully doesn't intend to hurt\n2. Silence is also a form of participation in bullying\n3. People who appear different may have extraordinary inner lives\n4. The consequences of cruelty can be irreversible\n\nConclusion: The story serves as a powerful lesson in empathy, courage to stand against injustice, and the human cost of social exclusion."}
      ]
    }
  },
  "social_ci": {
    "Resources and Development": {
      mcq: [
        {q:"Which type of resource is sunlight?",opts:["Non-renewable","Renewable","Biotic","Mineral"],ans:1},
        {q:"Resources which take millions of years to form are called:",opts:["Renewable","Non-renewable","Biotic","Abiotic"],ans:1},
        {q:"Land degradation is caused by:",opts:["Afforestation","Contour ploughing","Over-irrigation","Terrace farming"],ans:2},
        {q:"Which soil is best for growing cotton?",opts:["Alluvial soil","Red soil","Black soil","Laterite soil"],ans:2},
        {q:"Agenda 21 was adopted at:",opts:["Rio Summit 1992","Stockholm 1972","Kyoto 1997","Paris 2015"],ans:0},
        {q:"Terrace cultivation is practiced to:",opts:["Increase soil salinity","Check soil erosion","Increase evaporation","None"],ans:1},
        {q:"Which soil is found in the river deltas?",opts:["Red soil","Black soil","Alluvial soil","Laterite soil"],ans:2},
        {q:"Resources that are present everywhere are called:",opts:["Ubiquitous","Localised","Biotic","Abiotic"],ans:0},
        {q:"The idea of sustainable development means:",opts:["Using resources without limit","Saving all resources","Using resources to meet present needs without compromising future","Industrial development"],ans:2},
        {q:"Which region has laterite soil in India?",opts:["Punjab","Rajasthan","Kerala and Karnataka","Gujarat"],ans:2}
      ],
      short: [
        {q:"What is resource planning? Why is it essential for India?",a:"Resource planning is a technique or skill for the proper and judicious use of resources. It involves:\n1. Identification and inventory of resources\n2. Evolving a planning structure with appropriate technology\n3. Matching resource development plans with national development plans\n\nEssential for India because:\n- Resources are unequally distributed\n- Some states are resource-rich, others are resource-poor\n- Sustainable development requires careful planning\n- Prevents irrational exploitation and wastage"},
        {q:"Distinguish between renewable and non-renewable resources.",a:"Renewable Resources:\n- Can be replenished naturally in a short time\n- Examples: Solar energy, wind, water, forests\n- Sustainable if managed properly\n- Inexhaustible in nature\n\nNon-Renewable Resources:\n- Take millions of years to form\n- Examples: Coal, petroleum, natural gas, minerals\n- Once depleted, cannot be regenerated\n- Need to be used judiciously"},
        {q:"What are the problems of land degradation in India? Suggest measures.",a:"Problems:\n1. Soil erosion by wind and water\n2. Waterlogging due to over-irrigation\n3. Soil salinisation\n4. Shifting cultivation in forests\n5. Mining activities\n\nMeasures:\n1. Afforestation and planting shelter belts\n2. Control of overgrazing\n3. Contour ploughing and terrace farming\n4. Proper drainage systems\n5. Use of bio-fertilisers"},
        {q:"What is soil erosion? What causes it?",a:"Soil erosion is the removal of the top fertile layer of soil by natural agents like wind and water.\n\nCauses:\n1. Deforestation - removal of trees exposes soil\n2. Overgrazing by animals\n3. Heavy rainfall and flowing water\n4. Wind in arid regions\n5. Faulty agricultural practices\n6. Jhum cultivation (slash and burn)\n\nEffects: Loss of fertile land, floods, desertification"},
        {q:"Describe the characteristics of black soil.",a:"Black soil (Regur soil):\n1. Found in Deccan plateau, Malwa plateau, Gujarat, Maharashtra\n2. Made of lava (basalt rock)\n3. Rich in calcium, potassium, magnesium\n4. High clay content - retains moisture well\n5. Becomes sticky when wet, develops cracks when dry\n6. Best suited for growing cotton - called 'black cotton soil'\n7. Self-ploughing nature due to cracks"},
        {q:"What is Agenda 21?",a:"Agenda 21 is an international declaration signed at the Earth Summit in Rio de Janeiro, Brazil in 1992.\n- It aims at achieving global sustainable development\n- Addresses combating poverty, environmental protection\n- Each local government must have its own Local Agenda 21\n- Covers biodiversity, atmosphere, deforestation\n- Goal: To ensure that economic development does not harm the environment for future generations"}
      ],
      long: [
        {q:"Classify resources on the basis of ownership and give examples of each.",a:"On the basis of ownership, resources are classified as:\n\n1. Individual Resources (Private Resources):\n- Owned by private individuals\n- Examples: Land owned by farmers, houses, plantations, ponds on private land\n- Owner has right to use and sell them\n\n2. Community Owned Resources:\n- Accessible to all members of a community\n- Examples: Village ponds, public parks, playgrounds, grazing lands\n- Managed collectively by the community\n\n3. National Resources:\n- Owned by the nation/government\n- Examples: All minerals, water bodies, forests, wildlife\n- Government has authority to use these for development\n- Roads, canals, railways are also national resources\n\n4. International Resources:\n- Regulated by international institutions\n- Examples: Oceanic resources beyond 200 nautical miles of Exclusive Economic Zone\n- Antarctica is governed by international treaty\n- No individual country can use these without international permission\n\nImportance of Classification:\nThis classification helps in proper management and conservation of resources, ensuring equitable distribution and preventing exploitation."}
      ]
    }
  },
  "health_pe": {
    "Meaning, Objectives and Scope of Physical Education": {
      mcq: [
        {q:"Physical education is defined as education:",opts:["About the physical body only","Through physical activities","For physical fitness only","None of these"],ans:1},
        {q:"The main aim of physical education is:",opts:["Winning medals","All round development of personality","Making athletes","Entertainment"],ans:1},
        {q:"Which is NOT an objective of physical education?",opts:["Physical development","Mental development","Financial development","Social development"],ans:2},
        {q:"Who is considered the 'Father of Modern Olympic Games'?",opts:["Jesse Owens","Pierre de Coubertin","Carl Lewis","Jim Thorpe"],ans:1},
        {q:"Physical fitness includes:",opts:["Strength only","Endurance only","Flexibility only","Strength, endurance and flexibility"],ans:3},
        {q:"The Olympic motto is:",opts:["Faster, Higher, Stronger","Play and Win","Spirit of Sports","Fun and Fitness"],ans:0},
        {q:"UNESCO stands for:",opts:["United Nations Education Science & Cultural Organisation","United Nations Environment Science Cultural Organisation","United Nations Educational Social Cultural Organisation","None"],ans:0},
        {q:"Health education is a part of:",opts:["Physical education","Mental education","Social education","None"],ans:0},
        {q:"Recreational activities help in:",opts:["Physical fitness","Mental relaxation","Both","Neither"],ans:2},
        {q:"The scope of physical education includes:",opts:["Sports only","Yoga only","Gymnastics only","All physical activities"],ans:3}
      ],
      short: [
        {q:"Define physical education and state its importance.",a:"Physical education is the process of education through physical activities. It is concerned with the total development of an individual - physical, mental, social and emotional.\n\nImportance:\n1. Develops physical fitness - strength, endurance, flexibility\n2. Promotes mental health - reduces stress, improves concentration\n3. Builds character - teamwork, discipline, sportsmanship\n4. Teaches social skills - cooperation, leadership\n5. Develops health awareness and healthy habits\n6. Provides recreation and enjoyment"},
        {q:"What are the objectives of physical education?",a:"Objectives of Physical Education:\n\n1. Physical Development:\n- Develops muscles, bones and organs\n- Improves strength, speed, endurance, flexibility\n\n2. Mental Development:\n- Improves concentration and decision-making\n- Reduces stress and anxiety\n\n3. Social Development:\n- Teaches teamwork and cooperation\n- Develops leadership qualities\n\n4. Emotional Development:\n- Builds self-confidence\n- Teaches to handle success and failure\n\n5. Character Development:\n- Develops sportsmanship\n- Builds discipline and determination"},
        {q:"What is the scope of physical education?",a:"Scope of Physical Education:\n1. Sports and Games: Athletics, team sports, racket sports\n2. Gymnastics: Floor exercises, apparatus work\n3. Swimming: Recreational and competitive\n4. Yoga: For physical and mental health\n5. Dance: Cultural and creative expression\n6. Health Education: Teaching healthy habits\n7. Recreation: Leisure activities for enjoyment\n8. Adapted Physical Education: For differently-abled individuals\n9. Sports Medicine: Prevention and treatment of injuries"},
        {q:"Differentiate between physical education and sports.",a:"Physical Education:\n- Broader concept\n- Includes all physical activities\n- Aims at overall development\n- For all individuals regardless of ability\n- Part of school curriculum\n- Emphasis on participation\n\nSports:\n- Narrower concept\n- Involves competitive activities with rules\n- Aims at performance and winning\n- Requires specific skills and talent\n- Can be professional or amateur\n- Emphasis on competition and achievement"},
        {q:"What is the role of physical education in the modern world?",a:"Role in Modern World:\n1. Combating lifestyle diseases: Obesity, diabetes, hypertension are increasing; PE helps prevent them\n2. Mental health: Reduces depression and anxiety in increasingly stressful world\n3. Screen time: Provides active alternative to technology addiction\n4. Social cohesion: Sports unite people across communities\n5. National development: Healthy citizens contribute more to economy\n6. International relations: Sports diplomacy and Olympic games\n7. Discipline: Teaches punctuality, dedication and hard work"},
        {q:"Write about the aims of physical education according to ACHPER.",a:"ACHPER (Australian Council for Health, Physical Education and Recreation) aims of Physical Education:\n\n1. Motor skills: Develop fundamental movement skills\n2. Health-related fitness: Develop and maintain fitness\n3. Self-image: Build positive body image and self-confidence\n4. Social skills: Cooperative and competitive interactions\n5. Cognitive concepts: Understand movement principles\n6. Valuing physical activity: Appreciate lifelong benefits\n7. Leisure pursuits: Develop interests for lifelong participation"}
      ],
      long: [
        {q:"Explain the meaning, objectives and importance of physical education in detail.",a:"MEANING OF PHYSICAL EDUCATION:\nPhysical education is the sum of changes in the individual caused by experiences centred on motor activity. It uses physical activities as a medium to achieve the overall development of an individual - body, mind and spirit.\n\nModern Definition: Physical education is the process of education that develops the individual physically, mentally, socially and emotionally through the medium of physical activities.\n\nOBJECTIVES:\n\n1. Organic/Physical Development:\n- Develops cardiovascular system\n- Builds muscular strength and endurance\n- Improves flexibility and coordination\n- Promotes healthy growth and development\n\n2. Neuromuscular Development:\n- Improves hand-eye coordination\n- Develops motor skills and agility\n- Enhances balance and posture\n\n3. Intellectual/Mental Development:\n- Sharpens concentration and memory\n- Develops problem-solving and decision-making skills\n- Reduces mental stress and anxiety\n\n4. Social Development:\n- Teaches teamwork and cooperation\n- Develops communication skills\n- Promotes respect for rules and opponents\n- Builds leadership qualities\n\n5. Emotional Development:\n- Builds self-confidence and self-esteem\n- Teaches to manage emotions (both victory and defeat)\n- Provides emotional outlet through physical activity\n\nIMPORTANCE IN MODERN TIMES:\n1. Prevention of lifestyle diseases\n2. Promotion of mental health\n3. Character building\n4. National health improvement\n5. International representation through sports\n6. Recreation and enjoyment\n\nConclusion: Physical education is not a luxury but a necessity for complete human development."}
      ]
    }
  }
};
