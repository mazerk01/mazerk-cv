migrate((db) => {
  const collection = new Collection({
    "id": "enedi3b3k684juk",
    "created": "2023-04-07 14:30:05.849Z",
    "updated": "2023-04-07 14:30:05.849Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zuazt3t0",
        "name": "name",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("enedi3b3k684juk");

  return dao.deleteCollection(collection);
})
