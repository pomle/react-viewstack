# React ViewStack

Library for facilitating view transitions.

## Usage

### `ViewStack`

Mounts components on top of each other in Z-order. Later elements on top. Children will be given 100% height and absolute positioning to allow you to customize transitioning.

```tsx
import { ViewStack } from "@pomle/react-viewstack";

enum View {
  Home,
  Settings,
}

function Component() {
  const [view, setView] = useState(View.Home);

  return (
    <ViewStack>
      <div className="layer-1">
        This is your homepage
        
        <button onClick={() => setView(View.Settings)}>To Settings</button>
      </div>
      
      <div className="layer-2" style={{
        transform: view === View.Settings ? "none" : "translateX(-100%)",
        transition: "transform 0.5s",
      }}>
        This is your settings page
        
        <button onClick={() => setView(View.Home)}>Go Back</button>
      </div>
    </ViewStack>
  );
}
```


### `Sticky`

Holds children in DOM a while after unmount. Avoids premature removal of DOM elements for component that can not render due to missing data, but still needs to be visible while transitioning out.

```tsx
import { ViewStack, Sticky } from "@pomle/react-viewstack";

function Component() {
  const [bookId, setBookId] = useState<string>();

  return (
    <ViewStack>
      <div className="layer-1">
        This is your homepage
        
        <button onClick={() => setBookId("book-1")}>
          Book 1
        </button>
        
        <button onClick={() => setBookId("book-2")}>
          Book 2
        </button>
      </div>
      
      <div className="layer-2" style={{
        transform: !!bookId ? "none" : "translateX(-100%)",
        transition: "transform 500ms",
      }}>
        <Sticky delay={500}>
          {bookId && (<>
            Information about book ${bookId}
        
            <button onClick={() => setBookId(undefined)}>Go Back</button>
          </>)}
        <Sticky>
      </div>
    </ViewStack>
  );
}
```
