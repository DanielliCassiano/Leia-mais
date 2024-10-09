# Leia Mais

Leia Mais aims the objective to be a book/publisher administrator application, as a CRUD, but with some particular characteristics. A prototype was created to illustrate how it should work and the final goal to be delivered with this project.

## Prototype

Made with the [Figma](https://www.figma.com/proto/heIq134y96Em7MqBhr8EC9/LeiaMais?node-id=0-1&t=1BePwq6tWMucjOhx-1) app, branding focus on delivering an official set color.

![image](https://github.com/user-attachments/assets/ea92ac77-f301-4ddf-9925-22465cd8c1e8)

## Mainly dependencies and technologies 

- Angular 17
- TypeScript
- Webpack
- Material/web
- Bootstrap
- JSON-server


## Installation

 Install all the dependencies and prepare to run locally, for this run:
```
   npm install
```
## Running the app

Based on the micro-frontend architectural pattern, this app was built on 3 main MFEs, one having your route to access one from the module. There are:

### Vitrine 

This module is focused in to be a home, it should be open on the port http://localhost:4200
```
ng s vitrine-app -o
```

### Livros 

Here we have to pay attention to the fact we have two routes, the first one livros on path "/livros" and the second one catalogo one path "/catalogo", both running on port http://localhost:4200. This contains the core of the application, to manipulate the book's data. To access:

```
ng s livro-app -o
```

## API Integration

### Back-end scenery

The requests should use the path "API Port" + "/books" to consume and connect the API and do the operations from CRUD on the Book module. 

### Tempory mock data scenery 

Run the command `json server --watch mockData.json` to open a server environment to emulate a back-end connection.

## Explanation for the design choices/architecture   


I could focus on building branding for the application, so I chose Bootstrap to help me with the component development and component pattern, about icons I chose Material/web for it, but just for the icon because talking about usability and delivering speed, Bootstrap was the best chose for help me with the front-end development. 

Now talking about architecture, delivering a micro-frontend application, should be an easy choice, we can connect directly to the development of a feature or an application  with a squad or other people, and with this pattern, we can deliver big solutions in parallel to other projects's features. 
