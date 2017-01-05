---
title: Sorting and filtering items
mainTitle: Guide
layout: main.pug
category: guide
navWeight: 78
---

A frequent question that comes up is "How do I sort or filter the items of my widget".

For this, widgets and connectors that are handling items expose a `transformItems` prop. This prop is a function that has the `items` provided 
prop as a parameter. It will expect in return the `items` prop back. 

The following example will show you how to change the default sort order of the [`<RefinementList/>`](widgets/RefinementList.html) widget. Keep in mind
that you can apply the same strategy on every widget that handle a list of `items`. 

```jsx
import {InstantSearch, RefinementList} from 'react-instantsearch/dom';
import {orderBy} from 'lodash';

const App = () =>
  <InstantSearch
    appId="..."
    apiKey="..."
    indexName="..."
  >
    <SearchBox defaultRefinement="hi" />
    <RefinementList attributeName="category"
                    transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
  </InstantSearch>;
```

**Notes:**
* The example shows how to sort items, but you can also filter them

<div class="guide-nav">
    <div class="guide-nav-left">
        Previous: <a href="guide/i18n.html">← i18n</a>
    </div>
    <div class="guide-nav-right">
        Next: <a href="guide/Connectors.html">Connectors →</a>
    </div>
</div>