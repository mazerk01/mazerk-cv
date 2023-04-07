migrate((db) => {
  const collection = new Collection({
    "id": "jof5glaykgt8elz",
    "created": "2023-04-07 14:01:20.859Z",
    "updated": "2023-04-07 14:01:20.859Z",
    "name": "authentication",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": false,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jof5glaykgt8elz");

  return dao.deleteCollection(collection);
})
