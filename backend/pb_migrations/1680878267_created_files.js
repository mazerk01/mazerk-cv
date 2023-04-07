migrate((db) => {
  const collection = new Collection({
    "id": "x9q5khbxy69b7ri",
    "created": "2023-04-07 14:37:47.538Z",
    "updated": "2023-04-07 14:37:47.538Z",
    "name": "files",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "epqcunq1",
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
  const collection = dao.findCollectionByNameOrId("x9q5khbxy69b7ri");

  return dao.deleteCollection(collection);
})
