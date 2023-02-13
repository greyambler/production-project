import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Компанент для тестированя  ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation('translation');
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) { throw new Error(); }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('Выдать ошибку', { ns: 'translation' })}
        </Button>
    );
};
