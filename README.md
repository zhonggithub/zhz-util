# zhz-util

## Install

```shell
$ npm install ioredis
```

## Basic Usage

```javascipt
const { util, mysqlSeneca, mongodbSeneca } = require('zhz-util');
```

### seneca service plugs

```javascript
const { util, mysqlSeneca } = require('zhz-util');
const models = require('../../models');
const config = require('../../../config');

const model = models.Book;

module.exports = {
  init: () => Promise.resolve(),
  seneca(ctx) {
    const resourceName = 'book';
    const role = `${config.serviceName}.${resourceName}`;

    const service = new mysqlSeneca.Service({
      seneca: this,
      model: new mysqlSeneca.SequelizeModel(model),
      role,
      cache: ctx.cache,
      resourceName,
    });
    service.loadCmd();
    service.addAsync('treeList', async function (msg) {
      const { id } = msg.params;
      const data = await this.model.findById(id);
      return util.responseSuccess(data);
    });
    service.addAsync({
      async treeList1(msg) {
        const { id } = msg.params;
        const data = await this.model.findById(id);
        return util.responseSuccess(data);
      },
      async treeList2(msg) {
        const { id } = msg.params;
        const data = await this.model.findById(id);
        return util.responseSuccess(data);
      },
    });
  },
};

```

## Docs

- [util](./apidocs/docs/util.md)
- [ServiceBase](./apidocs/docs/ServiceBase.md)
- [Service](./apidocs/docs/Service.md)
- [ServiceUtilBase](./apidocs/docs/ServiceUtilBase.md)