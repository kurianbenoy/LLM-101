import streamlit as st
from openai import OpenAI


client = OpenAI()




def generate_poem(subject):
   completion = client.chat.completions.create(
       model="gpt-3.5-turbo",
       messages=[
           {
               "role": "user",
               "content": "Write me a 4 line simple poem about " + subject,
           }
       ],
   )
   return completion.choices[0].message.content




st.title("Simple Poem Generator")


subject = st.text_input("Enter a subject")
print(subject)


if st.button("Generate Poem"):
   poem = generate_poem(subject)
   st.code(poem, language="markdown")
