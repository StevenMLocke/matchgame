# I laughed at the thought...

----

## That will teach me

I was watching a video and a developer proposed this project as a challenge for beginning developers.  I thought that it was just to be something silly and lightweight. The logic isn't too difficult to think about. However, decent implementation is a little bit different of a story.

I have been learning a lot from doing this project. Not so much about the code but rather, about overestimating what I think that I know.

In studying luthiery I have read that the art itself is less about the building and building process and more about making mistakes and learning/knowing how to correct them successfully.  I am finding the same to be true in my code work.

## In the end...

It's all hooks all the way down. 

The logic of the thing wasn't too hard to consider. What was difficult was wrangling state and render. Especially considering NextJs defaults to React Server Components which will build in one render then hydrate child React Client Components in the next render. 

This was all fine and great until I tried to generate a randomized array. It was tricky to find a way to not re-generate on every render. I tried different tactics like useMemo - didn't work, or generate after initial render with useEffect. That sort of worked, just not on its own.

After all is said and done, it was not only a good learning experience but also a good humbling experience and I got a functioning app out of it.
