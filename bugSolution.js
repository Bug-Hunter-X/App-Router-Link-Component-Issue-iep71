```javascript
import Link from 'next/link';

function MyComponent() {
  // Use the navigate function for a more reliable solution within App Router
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/');
  };

  return (
    <div>
      <button onClick={handleNavigate}>Home</button>
    </div>
  );
}

export default MyComponent;
```