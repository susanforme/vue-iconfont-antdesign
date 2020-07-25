/**
 *
 * @param {object} myMap 映射表
 * @param {string} fontName 字体名
 */
export const createIcon = (myMap, fontName) => {
  return {
    name: 'Icon',
    functional: true,
    props: {
      name: {
        type: String,
        required: true,
      },
      className: {
        type: [String, Array, Object],
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
      size: {
        type: [Number, String],
        default: 14,
      },
      styleData: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    render(createElement, context) {
      const { props } = context;
      let { color, size: fontSize, name, className, styleData } = props;
      if (name === undefined) {
        throw new Error('name属性不能为空');
      }
      if (!Object.is(NaN, Number(fontSize))) {
        fontSize += 'px';
      }
      const defaultStyle = {
        color,
        fontSize: fontSize || '',
        fontFamily: fontName,
      };
      return createElement(
        'i',
        {
          class: className || 'v-icon',
          style: Object.assign(defaultStyle, styleData),
          attrs: {
            'data-icon': myMap[name],
          },
        },
        myMap[name]
      );
    },
  };
};
