# **Image Gallery React Application**

This is a React application that implements a mockup for an image gallery. The application fetches data from the following endpoint: **[https://agencyanalytics-api.vercel.app/images.json](https://agencyanalytics-api.vercel.app/images.json)**.

## **Features**

- When an image is clicked, the right side updates with the associated image data.
- When a tab is clicked, the following data is shown:
    - "Recently Added": Images are sorted by createdAt
    - "Favorited": Images which have been favorited are shown.
- The user can favorite and delete an image. These changes persist until the page is reloaded.
- The application uses TypeScript for type safety and better code structure.
- CSS is implemented using styled components for better maintainability.
- Semantic HTML is used for better accessibility and SEO.
- The application follows modern best practices for performance, security, and scalability.

## **Getting Started**

To run the application, follow the steps below:

1. Clone the repository:

```bash
git clone https://github.com/<username>/image-gallery.git
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm start
```

The application should now be running at **`http://localhost:3000/`**.

## **Usage**

To use the application, simply navigate to the homepage and start clicking on the images. The right side of the screen will update with the associated image data. You can also click on the tabs to switch between "Recently Added" and "Favorited" images. To favorite or delete an image, hover over it and click on the corresponding button.

## **Deployment**

The application has been deployed to https://app-git-master-runskmr.vercel.app/

## **Testing**

The application includes unit tests implemented using Jest and React Testing Library. To run the tests, use the following command:

```bash
npm test
```

## **Bonus Features**

The following bonus features have been implemented:

- Redux has been used for state management.
- The application is responsive and can be used on different screen sizes.
