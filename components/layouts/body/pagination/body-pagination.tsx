import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const PagList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  margin: '2rem 0',
});

const PagButton = styled('button')({
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '0.5rem 0.75rem',
  background: '#1976d2',
  color: '#fff',
  borderColor: 'transparent',
  textTransform: 'uppercase',
  borderRadius: '.25rem',
  borderWidth: '.1rem',
  cursor: 'pointer',
})

interface Pag {
  count: number,
  page: number,
  handleChange: any,
}

export default function UsePagination({ count, page, handleChange }: Pag) {
  const { items } = usePagination({
    count: count,
    page: page,
    onChange: handleChange,
  });

  return (
    <nav>
      <PagList>
        {items.map(({ page, type, selected, disabled, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <PagButton
                type="button"
                style={{
                  fontWeight: selected ? 'bolder' : undefined,
                  background: selected ? '#fff' : undefined,
                  color: selected ? '#1976d2' : undefined,
                  borderColor: selected ? '#1976d2' : undefined,
                }}
                {...item}
              >
                {page}
              </PagButton>
            );
          } else {
            children = (
              <PagButton
                type="button"
                style={{
                  background: disabled ? 'Gainsboro' : undefined,
                  color: disabled ? 'SlateGray' : undefined,
                  cursor: disabled ? 'default' : undefined,
                }}
                {...item}
              >
                {type}
              </PagButton>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </PagList>
    </nav>
  );
}