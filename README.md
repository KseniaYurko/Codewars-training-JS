This repo contains tasks of varying complexity from the Codewars site :)

## Fundamentals  
Tasks for training the basics of language. Most of them solved in one line.

## Runk Up  
More complex tasks amied at training algorithms. For each task, in addition to solving, i tried to write testing as well.

<details><summary><b>[6 kyu] <a href="https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript">1. Duplicate encoder.js</b></a></summary>
<p>

The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

**Examples**

```javascript
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

**Notes**  
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!  
  
</p>
</details>

<details><summary><b>[6 kyu] <a href="https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript">2. Decode the Morse code (1/3)</b></a></summary>
<p>

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

**NOTE:** Extra spaces before or after the code have no meaning and should be ignored.  

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

**For example:**

        decodeMorse('.... . -.--   .--- ..- -.. .')
        //should return "HEY JUDE"

**NOTE:** For coding purposes you have to use ASCII characters `.` and `-`, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it


</p>
</details>
