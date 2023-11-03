import {ProfileLayoutProps} from './interface';

export default function LayoutProfile({children}: ProfileLayoutProps) {
  return (
    <div>
      <h1>layout</h1>
      {children}
    </div>
  );
}
