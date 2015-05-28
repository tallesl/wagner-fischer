module.exports = function (str1, str2) {
  
  if (typeof(str1) !== 'string' || typeof(str2) !== 'string') throw new Error('Pass two strings!')
  
  var distances = []
  
  for (var i = 0; i <= str1.length; ++i) distances[i]    = [ i ]
  for (var i = 0; i <= str2.length; ++i) distances[0][i] =   i
  
  for (var j = 1; j <= str2.length; ++j)
    for (var i = 1; i <= str1.length; ++i)

      distances[i][j] =

        str1[i - 1] === str2[j - 1] ? // if the characters are equal
        distances[i - 1][j - 1] :     // no operation needed
                                      // else
        Math.min.apply(Math, [        // take the minimum between
           distances[i - 1][  j  ] + 1 // a  deletion
         , distances[  i  ][j - 1] + 1 // an insertion
         , distances[i - 1][j - 1] + 1 // a  substitution
       ])

  return distances[str1.length][str2.length]
  
}

