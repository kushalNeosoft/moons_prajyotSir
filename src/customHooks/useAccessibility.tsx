import {useEffect} from 'react';
import {AccessibilityInfo} from 'react-native';

function useAccessibility({accessibilityLabel, accessibilityHint}) {
  useEffect(() => {
    AccessibilityInfo.setAccessibilityInfo({
      accessibilityLabel,
      accessibilityHint,
    });
  }, [accessibilityLabel, accessibilityHint]);
}

export default useAccessibility;
