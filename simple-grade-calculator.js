//Write a function getGrade(score) that returns:
//"A" if score ≥ 90
//"B" if score ≥ 80
//"C" if score ≥ 70
//"D" if score ≥ 60
//"F" otherwise

function getGrade (score) 
{
    if (score >= 90) 
        {
            return "A"
        } else if (score >= 80) 
            {
                return "B"
            } else if (score >= 70) 
                {
                    return "C"
                } else if (score >= 60) 
                    {
                        return "D"
                    } else 
                        {
                            return "F"
                        }
};

console.log(getGrade(82));
