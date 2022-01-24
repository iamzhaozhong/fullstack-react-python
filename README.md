# Introduction

This is a blog app made with a simple  goal in mind - to build something that I personally want to use as an 
end-user. Thus, it is indeed "very personal" because of it. The app tries to keep the stability and sustainability 
front and central. To create a design that is both clean and functional, and the code that is readable and 
customizable by anyone.


## Technology

In order to make this project happen, I will be using:

-   JavaScript for the front-end, with React framework
-   Python for the back-end, to create RESTful API and using the Django
    framework
-   Deployment on Cloud services Heroku and Netify

## Definition of MVP/Definition of Done

-   A working and functional for the blog

    -   users are able to log in from the client site, authenticated by the
        server
    -   users can view the unpublished draft once logged in
    -   users can make edits on the post and updates them/save them to the draft
    -   users can delete/hide the comments
    -   guests can view the published post ONLY
    -   guests can leave a comment on the post
    -   guests can send messages to the author/site owner
    -   guests can view and interact with the interface and external links
        (GitHub/LinkedIn)

-   Deploy the production to cloud services
    -   Link the repo with Heroku
    -   Deploy the backend to the Heroku App
    -   Create the PostgresSQL database directly with Heroku CLI
    -   Link the repo with front end hosting provider(Netify)
    -   The app is live and functional

## Post MVP

Should there be more capacity when MVP finished, I would like to:

-   make co-author available for others such as friends and family members(new
    table in DB)
-   a contact form for the visitors, so they can reach out to the
    author/co-author
-   a fully functional, more sophisticated admin panel for the end-user to
    manage their blog

## Wireframes

<kbd>![image1](/assets/Web%201920%20–%201.png)</kbd>
<kbd>![image2](/assets/Web%201920%20–%202.png)</kbd>
<kbd>![image3](/assets/Web%201920%20–%203.png)</kbd>
<kbd>![image4](/assets/Web%201920%20–%204.png)</kbd>
<kbd>![image5](/assets/Web%201920%20–%205.png)</kbd> (Note: the contact form
above will be post-MVP)

## Flowchart

<kbd>![flow](/assets/flow.png)</kbd>

## Entity Relationship Diagram for the DB

<kbd>![flow](/assets/erd_updated.png)</kbd>
