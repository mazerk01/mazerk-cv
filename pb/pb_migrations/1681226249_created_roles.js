migrate((db) => {
  const collection = new Collection({
    "id": "0rtjqrf4rpi6z18",
    "created": "2023-04-11 15:17:29.191Z",
    "updated": "2023-04-11 15:17:29.191Z",
    "name": "roles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hhfm43t1",
        "name": "level",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "wtd8w2je",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("0rtjqrf4rpi6z18");

  return dao.deleteCollection(collection);
})
