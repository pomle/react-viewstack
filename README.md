# React ViewStack

Library for facilitating view transitions.

## Usage

### ViewStack

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
      }}>
        This is your settings page
        
        <button onClick={() => setView(View.Home)}>Go Back</button>
      </div>
    </ViewStack>
  );
}
```
